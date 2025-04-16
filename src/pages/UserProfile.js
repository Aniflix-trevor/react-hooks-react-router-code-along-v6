// UserProfile.js
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserProfile() {
    const params = useParams();
    console.log(params);
    const [user, setUser] = useState({});
const userId = params.id;
    useEffect(() => {
        fetch(`http://localhost:3000/users/${userId}`)
            .then(r => r.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, [userId]);

    if (!user.name){
        return <h1>Loading...</h1>
    }

  return (
    <>
      <header>
        <Link to="/Login">Login</Link> | <Link to="/About">About</Link> | <Link to="/">Home</Link>
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
}

export default UserProfile;
