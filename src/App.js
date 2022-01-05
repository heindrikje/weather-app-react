import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Weather />
        </div>
        <Footer />
      </div>
    </div>
  );
}

// Matt hat nach container noch:
// <Weather defaultCity="New York" />
