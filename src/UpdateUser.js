import { db } from "./firebase-config";
import { doc, updateDoc } from "@firebase/firestore";

export const UpdateUser = ({ id, age }) => {
  const updateUserInDb = async () => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  return <button onClick={updateUserInDb}>Increase Age</button>;
};
