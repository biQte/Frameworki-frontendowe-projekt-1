import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';
import NavBarMenuApp from '../components/NavBarMenuApp';
import FooterApp from '../components/FooterApp';

function RootLayout() {
  return (
    <>
      <NavBarMenuApp />
      <Container className="mt-4 mb-4">
        <Outlet />
      </Container>
      <FooterApp />
    </>
  );
}

export default RootLayout;
