import React from "react";
import { useAuth } from "../context/authProvider";
import { auth, provider } from "../firebase/firebase";

const Home = () => {
  const { login, setLogin } = useAuth();

  const signinHandler = async () => {
    console.log("Hello");
    try {
      const credentials = await auth.signInWithPopup(provider);

      if (credentials) {
        setLogin(true);
      }
      console.log(credentials);

      // ! checking username and uid
      const { displayName, uid } = credentials.user;
      console.log(`Hello ${displayName}, your unique id: ${uid}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!login && (
        <>
          <header>
            Hi There, Before you can interact you have to login first
          </header>
          <button className="btn btn-green" onClick={signinHandler}>
            Signin
          </button>
        </>
      )}
      {login && <Hello />}
    </div>
  );
};

const Hello = () => {
  const { login, setLogin } = useAuth();

  const signoutHandler = () => {
    auth.signOut();
    setLogin(false)
    console.log("Signed out");
  };

  return (
    <>
      Hello There Welcome home !<button onClick={signoutHandler}>Logout</button>
    </>
  );
};

export default Home;
