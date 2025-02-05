import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';


const API_BASE_URL = "http://localhost:8000"; // API のベースURLを定義

function App() {
  return (
    <div>
      <Login apiUrl={API_BASE_URL} />
      <hr />
      <Register apiUrl={API_BASE_URL} />
      <hr />
      <Profile apiUrl={API_BASE_URL} />
    </div>
  );
}

export default App;
