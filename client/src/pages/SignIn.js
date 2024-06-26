import { useState } from "react";
import { app } from "../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value + "Signin Success"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="signup-page">
        <h1>SignIn</h1>
        <form method="post">
          <label>Enter Your Email</label>
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            type="password"
            autoComplete=""
            required
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={signInUser}>Signin</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
