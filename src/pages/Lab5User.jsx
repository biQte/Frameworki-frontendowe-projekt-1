import { useParams, Link } from "react-router";
import { Card, Spinner, ListGroup, Button } from "react-bootstrap";
import useFetch from "../data/useFetch";

function Lab5User() {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!user) return <Spinner animation="border" />;

  return (
    <div>
      <Link to="/lab5">
        <Button variant="secondary" className="mb-3">Wróć</Button>
      </Link>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@{user.username}</Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
            <ListGroup.Item>Website: {user.website}</ListGroup.Item>
            <ListGroup.Item>Company: {user.company?.name}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Lab5User;
