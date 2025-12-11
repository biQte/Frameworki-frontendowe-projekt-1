import { useData } from '../data/useAppHooks';

function FlexContainer({ element: Element }) {
  const items = useData();

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.map(item => (
        <Element key={item.id} {...item} />
      ))}
    </div>
  );
}

export default FlexContainer;
