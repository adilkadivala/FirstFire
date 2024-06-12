import { getDatabase, ref, set } from "firebase/database";

import { app } from "./firebase";
import SignUp from "./Pages/SIgnUp";
import SignIn from "./Pages/SignIn";

// making databse insense

const db = getDatabase(app);

const putData = () => {
  set(ref(db, "users/Adil"), {
    id: 1,
    name: "Adil ",
    age: 22,
  });
};

function App() {
  return (
    <>
      <div>
        <p>Hello First Fire</p>
      </div>
      <button onClick={putData}>Send Data</button>
      <SignUp />
      <SignIn />
    </>
  );
}

export default App;
