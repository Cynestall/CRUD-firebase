import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import { CreateUser } from "./CreateUser";
import { UpdateUser } from "./UpdateUser";
import { DeleteUser } from "./DeleteUser";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <div className="App">
      <CreateUser />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>User: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <UpdateUser id={user.id} age={user.age} />
            <DeleteUser id={user.id} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
