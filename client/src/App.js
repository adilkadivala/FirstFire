// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useFirebase } from "./context/Firebase";
import "./assets/css/signin.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  // const firebase = useFirebase();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    // <>
    //   <main className="main">
    //     <div className="container">
    //       <section className="wrapper">
    //         <div className="heading">
    //           <h1 className="text text-large">Sign In</h1>
    //           {/* <p className="text text-normal">
    //             New user?{" "}
    //             <span>
    //               <Link to="/" className="text text-links">
    //                 Create an account
    //               </Link>
    //             </span>
    //           </p> */}
    //         </div>
    //         <form name="signin" className="form">
    //           <div className="input-control">
    //             <label htmlFor="email" className="input-label" hidden>
    //               Email Address
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               className="input-field"
    //               placeholder="Email Address"
    //             />
    //           </div>
    //           <div className="input-control">
    //             <label htmlFor="password" className="input-label" hidden>
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               id="password"
    //               className="input-field"
    //               placeholder="Password"
    //             />
    //           </div>
    //           <div className="input-control">
    //             {/* <Link to="/" className="text text-links">
    //               Forgot Password
    //             </Link> */}
    //             <button
    //               // type="submit"
    //               // name="submit"
    //               className="input-submit"
    //               onClick={() =>
    //                 firebase.signUpUserwithEmailandPassword(email, password)
    //               }
    //             >
    //               Sign In
    //             </button>
    //           </div>
    //         </form>
    //         <div className="striped">
    //           <span className="striped-line"></span>
    //           <span className="striped-text">Or</span>
    //           <span className="striped-line"></span>
    //         </div>
    //         {/* <div className="method">
    //           <div className="method-control">
    //             <Link to="/" className="method-action">
    //               <i className="ion ion-logo-google"></i>
    //               <span>Sign in with Google</span>
    //             </Link>
    //           </div>
    //           <div className="method-control">
    //             <Link to="/" className="method-action">
    //               <i className="ion ion-logo-facebook"></i>
    //               <span>Sign in with Facebook</span>
    //             </Link>
    //           </div>
    //           <div className="method-control">
    //             <Link to="/" className="method-action">
    //               <i className="ion ion-logo-apple"></i>
    //               <span>Sign in with Apple</span>
    //             </Link>
    //           </div>
    //         </div> */}
    //       </section>
    //     </div>
    //   </main>
    // </>
    <>
      {/* <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password Here"
      />
      <br />
      <button>Sign In With google</button>
      <br />
      <button
        type="submit"
        onClick={() => {
          firebase.signUpUserwithEmailandPassword(email, password);
          firebase.putData("users/" + email, { email, password });
        }}
      >
        Sign In
      </button> */}

      <SignIn />
      <SignUp />
    </>
  );
};

export default App;
