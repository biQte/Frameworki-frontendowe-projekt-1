import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { Button, Form, Alert } from 'react-bootstrap';
import AppContext from '../data/AppContext';

function FormEdit() {
  const { items, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert id to number for comparison as IDs are numbers
  const personId = parseInt(id, 10);
  const person = items.find(p => p.id === personId);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    if (person) {
      setValue("name", person.name);
      setValue("email", person.email);
      setValue("birthDate", person.birthDate);
      setValue("phone", person.phone);
    }
  }, [person, setValue]);

  const onSubmit = (data) => {
    dispatch({ type: 'edit', id: personId, data: data });
    navigate('/lab4');
  };

  if (!person) return <Alert variant="danger">Nie znaleziono osoby.</Alert>;

  return (
    <div className="container mt-4">
      <h2>Edytuj profil</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Imię</Form.Label>
          <Form.Control
            {...register("name", { required: "Imię jest wymagane", minLength: { value: 3, message: "Min. 3 znaki" } })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register("email", { required: "Email jest wymagany", pattern: { value: /^\S+@\S+$/i, message: "Niepoprawny email" } })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data urodzenia</Form.Label>
          <Form.Control
            type="date"
            {...register("birthDate", { required: "Data jest wymagana" })}
            isInvalid={!!errors.birthDate}
          />
          <Form.Control.Feedback type="invalid">{errors.birthDate?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            {...register("phone", { required: "Telefon jest wymagany" })}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Zapisz</Button>
      </Form>
    </div>
  );
}

export default FormEdit;
