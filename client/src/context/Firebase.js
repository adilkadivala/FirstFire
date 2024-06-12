import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

// database connection
const firebaseConfig = {
  apiKey: "AIzaSyChUTwEnOS--5InR2JlPzFzQBsi-30L1R4",
  authDomain: "firstfirebase-f9234.firebaseapp.com",
  projectId: "firstfirebase-f9234",
  storageBucket: "firstfirebase-f9234.appspot.com",
  messagingSenderId: "420936316516",
  appId: "1:420936316516:web:7565bb187054e751d11171",
  databaseURL: "https://firstfirebase-f9234-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUpUserwithEmailandPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider
      value={{ signUpUserwithEmailandPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
