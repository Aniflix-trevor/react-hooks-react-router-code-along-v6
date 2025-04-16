import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <header>{/* Save space for NavBar */}
        <Link to="/">Home</Link> | <Link to="/Login">Login</Link> | <Link to="/profile">Profile</Link>
      </header>
      <main>
        <h1>This is my about component!</h1>
      </main>
    </>
  );
}

export default About;
