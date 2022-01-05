import React from "react";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Hello from App </p>
        <Footer />
      </div>
    </div>
  );
}

// Matt hat nach container noch:
// <Weather defaultCity="New York" />
// er importiert nur Weather.js
