import { db } from "./firebase-config";
import { doc, deleteDoc } from "@firebase/firestore";

export const DeleteUser = ({ id }) => {
  const userDoc = doc(db, "users", id);

  const deleteUserInDb = async () => await deleteDoc(userDoc);
  return <button onClick={deleteUserInDb}>Delete user</button>;
};
