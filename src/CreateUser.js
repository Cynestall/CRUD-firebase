import { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "@firebase/firestore";

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const usersCollectionRef = collection(db, "users");
  const createUserInDb = async () => {
    await addDoc(usersCollectionRef, { name: name, age: Number(age) });
    setName("");
    setAge(0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(event) => {
          console.log(event.target.value);
          setAge(event.target.value);
        }}
        value={age}
      />
      <button onClick={createUserInDb}>Create user</button>
    </div>
  );
};
