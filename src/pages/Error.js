import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
         <Link to="/Login">Login</Link> | <Link to="/About">About</Link> | <Link to="/">Home</Link> | 
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
      </main>
    </>
  );
}

export default ErrorPage;
