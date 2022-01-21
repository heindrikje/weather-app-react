import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <SearchForm defaultCity="Paris" />
        </div>
        <footer>
          <a
            href="https://github.com/heindrikje/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Open-source code
          </a>{" "}
          by Heindrikje Kuhs
        </footer>
      </div>
    </div>
  );
}
