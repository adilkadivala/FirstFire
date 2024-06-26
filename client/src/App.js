import SignIn from "./pages/SignIn";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import { app } from "./Firebase";
import Datas from "./pages/Datas";

const App = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("hello", user);
        setUser(user);
      } else {
        console.log("you are logged out");
        setUser(null);
      }
    });
  }, [auth]);

  if (user === null) {
    return (
      <>
        <SignIn />
        <SignUp />
      </>
    );
  }

  return (
    <>
      <h1> Hello {user.email}</h1>
      <Datas />
      <br />
      <button onClick={() => signOut(auth)}>log out</button>
    </>
  );
};

export default App;
