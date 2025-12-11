import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <h1>404 - Strona nie znaleziona</h1>
      <p>Przepraszamy, ale strona, której szukasz, nie istnieje.</p>
      <Link to="/home">Wróć na stronę główną</Link>
    </div>
  );
}

export default NotFound;
