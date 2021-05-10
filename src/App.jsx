import { useEffect, useState } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";
import db from "./firebase.config";
import firebase from "firebase";
import firestore from "@firebase/firestore";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputForm input={input} addTodo={addTodo} setInput={setInput} />
      <TodoList todos={todos} />
    </div>
  );
}
