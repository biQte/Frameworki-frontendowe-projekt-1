import { useEffect, useReducer, useState } from "react";
import { Table, Dropdown, Spinner, Accordion } from "react-bootstrap";
import { Link } from "react-router";
import useFetch from "../data/useFetch";
import TableDataReducer from "../data/TableDataReducer";

function Lab5Page() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  const [tableData, dispatch] = useReducer(TableDataReducer, []);
  const [originalData, setOriginalData] = useState([]); // Store original data for reset

  useEffect(() => {
    if (posts && users && comments) {
      const merged = posts.map(p => ({
        id: p.id,
        title: p.title,
        body: p.body,
        userId: p.userId,
        user: users.find(u => u.id === p.userId),
        comments: comments.filter(c => c.postId === p.id),
        commentsCount: comments.filter(c => c.postId === p.id).length
      }));
      dispatch({ type: "set", data: merged });
      setOriginalData(merged);
    }
  }, [posts, users, comments]); // Run when all data is fetched

  const handleSort = (key, order) => {
    dispatch({ type: "sort", key, order, original: originalData });
  };

  if (!posts || !users || !comments) return <Spinner animation="border" />;

  return (
    <div>
      <h1>Laboratorium 5 - Data Fetching</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>
              <div className="d-flex justify-content-between align-items-center">
                User
                <SortDropdown onSort={(order) => handleSort("userId", order)} />
              </div>
            </th>
            <th style={{ width: "60%" }}>
              <div className="d-flex justify-content-between align-items-center">
                Post Title
                <SortDropdown onSort={(order) => handleSort("title", order)} />
              </div>
            </th>
            <th style={{ width: "20%" }}>
              <div className="d-flex justify-content-between align-items-center">
                Comments
                <SortDropdown onSort={(order) => handleSort("commentsCount", order)} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.id}>
              <td>
                {item.user ? (
                  <Link to={`/lab5/users/${item.userId}`}>{item.user.name}</Link>
                ) : "Unknown"}
              </td>
              <td>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      {item.body}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>
              <td>
                <Link to={`/lab5/posts/${item.id}/comments`}>
                  {item.commentsCount}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function SortDropdown({ onSort }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSort("asc")}>A-Z (Rosnąco)</Dropdown.Item>
        <Dropdown.Item onClick={() => onSort("desc")}>Z-A (Malejąco)</Dropdown.Item>
        <Dropdown.Item onClick={() => onSort("original")}>Oryginalnie</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Lab5Page;
