import FlexContainer from '../components/FlexContainer';
import ProfileItem from '../components/ProfileItem';
import { data } from '../data/module-data';

function Lab3Page() {
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={ProfileItem} data={data} />
    </div>
  );
}

export default Lab3Page;
