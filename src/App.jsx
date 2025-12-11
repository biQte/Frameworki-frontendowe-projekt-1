import { data } from './module-data';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="container">
      <h1>Data base</h1>
      <div className="d-flex flex-wrap">
        {data.map(person => (
          <ProfileCard
            key={person.id}
            {...person}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
