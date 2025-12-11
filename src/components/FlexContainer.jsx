import { useContext } from 'react';
import AppContext from '../data/AppContext';

function FlexContainer({ element: Element }) {
  const context = useContext(AppContext);
  const items = context.items;

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.map(item => (
        <Element key={item.id} {...item} />
      ))}
    </div>
  );
}

export default FlexContainer;
