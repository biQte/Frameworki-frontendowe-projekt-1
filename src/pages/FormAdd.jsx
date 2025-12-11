import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import AppContext from '../data/AppContext';
import { Button, Form, Alert } from 'react-bootstrap';

function FormAdd() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const newErrors = [];
    if (!data.name || data.name.length < 3) newErrors.push("Imię musi mieć min. 3 znaki.");
    if (!data.email || !data.email.includes('@')) newErrors.push("Podaj poprawny email.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch({ type: 'add', data: data });
    navigate('/lab4');
  };

  return (
    <div className="container mt-4">
      <h2>Dodaj profil</h2>
      {errors.length > 0 && <Alert variant="danger">{errors.map((e, i) => <div key={i}>{e}</div>)}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Imię</Form.Label>
          <Form.Control name="name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data urodzenia</Form.Label>
          <Form.Control name="birthDate" type="date" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefon</Form.Label>
          <Form.Control name="phone" required />
        </Form.Group>
        <Button type="submit">Dodaj</Button>
      </Form>
    </div>
  );
}

export default FormAdd;
