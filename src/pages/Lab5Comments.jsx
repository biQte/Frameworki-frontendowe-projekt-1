import { useParams, Link } from "react-router";
import { Card, Spinner, Button, ListGroup } from "react-bootstrap";
import useFetch from "../data/useFetch";

function Lab5Comments() {
  const { id } = useParams(); // Post ID
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  if (!post || !comments) return <Spinner animation="border" />;

  return (
    <div>
      <Link to="/lab5">
        <Button variant="secondary" className="mb-3">Wróć</Button>
      </Link>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Post #{post.id}: {post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
      <h3>Komentarze ({comments.length})</h3>
      <ListGroup>
        {comments.map(c => (
          <ListGroup.Item key={c.id}>
            <h5>{c.name} <small className="text-muted">({c.email})</small></h5>
            <p>{c.body}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Lab5Comments;
