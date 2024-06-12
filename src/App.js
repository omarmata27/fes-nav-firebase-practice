import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { auth } from "./firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  return (
    <div>
        <Nav></Nav>
    </div>
  );
}

export default App;
