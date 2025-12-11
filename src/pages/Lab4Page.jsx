import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import FlexContainer from '../components/FlexContainer';
import ProfileItem from '../components/ProfileItem';

function Lab4Page() {
  return (
    <div>
      <h1>Laboratorium 4</h1>
      <div className="mb-4">
        <Link to="/lab4/add">
          <Button variant="primary">Dodaj nowy profil</Button>
        </Link>
      </div>
      <FlexContainer element={ProfileItem} />
    </div>
  );
}

export default Lab4Page;
