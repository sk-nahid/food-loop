// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // optional, useful if you use Tailwind's dark: utilities
  theme: {
    extend: {
      colors: {
        // these resolve at runtime from CSS variables
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // DaisyUI theme names should match your data-theme values
        foodloop: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          accent: "var(--accent)",
          neutral: "var(--text)",
          "base-100": "var(--background)",
        },
      },
      {
        foodloopdark: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          accent: "var(--accent)",
          neutral: "var(--text)",
          "base-100": "var(--background)",
        },
      },
    ],
  },
};
