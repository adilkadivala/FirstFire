import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // authentication
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  // witn detail
  const signUpUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  // with google button
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <div className="signup-page">
        <form method="post">
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
            autoComplete=""
            placeholder="Enter Your password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signUpUser}>Signup User</button>
          <br />
          <button onClick={signUpWithGoogle}>Signin With Google</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
