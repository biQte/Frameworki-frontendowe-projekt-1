import { data } from '../module-data';
import ProfileCard from '../components/ProfileCard';

function Lab1() {
  return (
    <>
      <h1>Laboratorium 1</h1>
      <div className="d-flex flex-wrap">
        {data.map(person => (
          <ProfileCard key={person.id} {...person} />
        ))}
      </div>
    </>
  );
}

export default Lab1;
