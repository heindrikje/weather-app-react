import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";
import "./darkMode.css";

export default function DarkMode() {
  const darkMode = useDarkMode(false);

  return (
    <div className="DarkMode">
      <DarkModeToggle
        checked={darkMode.value}
        onChange={darkMode.toggle}
        size={50}
      />
    </div>
  );
}
