import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // authentication
  const auth = getAuth(app);
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  return (
    <>
      <div className="signup-page">
        <label>Email</label>
        <input
          type="email"
          required
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          required
          placeholder="Enter Your password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signUpUser}>Signup User</button>
      </div>
    </>
  );
};

export default SignUp;
