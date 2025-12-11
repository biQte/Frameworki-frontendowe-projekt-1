import { Button, Card, ListGroup } from 'react-bootstrap';
import RatingBar from './RatingBar';

function ProfileItem({ id, name, email, birthDate, phone, rating, check, dispatch }) {
  return (
    <Card style={{ width: '18rem' }} className={`m-3 ${check ? 'border-primary' : ''}`}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ID: {id}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>Email: {email}</ListGroup.Item>
          <ListGroup.Item>Data ur.: {birthDate}</ListGroup.Item>
          <ListGroup.Item>Telefon: {phone}</ListGroup.Item>
        </ListGroup>
        <div className="mt-2 mb-2">
          <RatingBar rate={rating || 0} />
        </div>
        <div className="d-flex justify-content-between flex-wrap gap-2">
          <Button variant="outline-secondary" size="sm">Edit</Button>
          <Button
            variant={check ? "success" : "outline-success"}
            size="sm"
            onClick={() => dispatch({ type: 'check', id: id })}
          >
            {check ? "Uncheck" : "Check"}
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => dispatch({ type: 'delete', id: id })}
          >
            Delete
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => dispatch({ type: 'rate', id: id })}
          >
            Rate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProfileItem;
