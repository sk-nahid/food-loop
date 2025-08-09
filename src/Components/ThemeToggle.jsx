// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const defaultTheme = document.documentElement.getAttribute("data-theme") || "foodloop";
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // if you want Tailwind's `dark:` variants to work, also toggle the .dark class:
    if (theme === "foodloopdark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="btn btn-outline"
      onClick={() => setTheme(prev => (prev === "foodloop" ? "foodloopdark" : "foodloop"))}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
