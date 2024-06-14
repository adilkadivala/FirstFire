import { useState } from "react";
import { app } from "../Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value + "Signin Success"))
      .catch((err) => console.log(err));
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <div className="signup-page">
        <h1>SignIn</h1>
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
          required
          placeholder="Enter Your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={signUpWithGoogle}>Signin With Google</button>
        <br />
        <button onClick={signInUser}>SignUp</button>
      </div>
    </>
  );
};

export default SignUp;
