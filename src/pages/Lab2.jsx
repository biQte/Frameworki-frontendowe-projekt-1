import { useParams } from 'react-router';
import { data } from '../module-data';
import ProfileCard from '../components/ProfileCard';

function Lab2() {
  const { id } = useParams();

  if (!id) {
    return <div>Brak identyfikatora osoby.</div>;
  }

  const person = data.find(p => p.id === parseInt(id));

  if (!person) {
    return <div>Nie znaleziono osoby o tym identyfikatorze.</div>;
  }

  return (
    <div>
      <h1>Laboratorium 2</h1>
      <ProfileCard {...person} />
    </div>
  );
}

export default Lab2;
