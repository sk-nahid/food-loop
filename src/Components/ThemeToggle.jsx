// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


const ThemeToggle = () => {
  const defaultTheme = document.documentElement.getAttribute("data-theme") || "light";
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // if you want Tailwind's `dark:` variants to work, also toggle the .dark class:
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="btn btn-outline"
      onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))}
    >
      {theme==="light"?<CiLight />:<MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;
