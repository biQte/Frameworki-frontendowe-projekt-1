import wseiLogo from '/src/assets/react.svg';

function FooterApp() {
  return (
    <footer className="footer mt-auto py-3 bg-light text-center">
      <div className="container">
        <img src={wseiLogo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
        <span className="text-muted ms-2">s12345@wsei.edu.pl</span>
      </div>
    </footer>
  );
}

export default FooterApp;
