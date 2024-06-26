import { app } from "../Firebase";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const Datas = () => {
  const firestore = getFirestore(app);

  //   sending data in firebase
  const writeData = async () => {
    const response = await addDoc(collection(firestore, "cities"), {
      name: "Delhi",
      pinCode: "326598",
      Lat: "123",
      long: "698",
    });
    console.log(response, "result");
  };

  //   sending sub data in parent data in firebase
  const makeSubData = async () => {
    await addDoc(collection(firestore, "cities/POUWnEBPIQC1xF5yHeIe/places"), {
      name: "this is a sector one of newdelhi",
      desc: "Awesome Sector for foreigner",
      date: Date.now(),
    });
  };

  //   reading data
  //   const getData = doc(firestore, "cities", "POUWnEBPIQC1xF5yHeIe");

  return (
    <div>
      <h1>Hello </h1>
      <br />
      <button onClick={writeData}>Put data</button>
      <button onClick={makeSubData}>Put sub data</button>
    </div>
  );
};

export default Datas;
