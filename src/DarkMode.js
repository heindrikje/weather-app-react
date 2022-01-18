import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "use-dark-mode";

export default function DarkMode() {
  const darkMode = useDarkMode(false);

  return (
    <div className="DarkMode">
      <DarkModeSwitch
        checked={darkMode.value}
        onChange={darkMode.toggle}
        size={36}
        moonColor="#5ea1e4"
        sunColor="#153685"
      />
    </div>
  );
}
