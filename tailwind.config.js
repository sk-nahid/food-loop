// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // --- Start of Fix ---
  daisyui: {
    themes: [
      {
        darktheme: {
          "text": "#effaf3",
          "background": "#041008",
          "primary": "#35bb5b",
          "secondary": "#631c53",
          "accent": "#8f3a28",
          "neutral": "#1f2937",
          "base-100": "#041008", // This is the main background color
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      {
        lighttheme: {
          "text": "#051009",
          "background": "#effbf3",
          "primary": "#44ca6a",
          "secondary": "#e39cd3",
          "accent": "#d78170",
          "neutral": "#374151",
          "base-100": "#effbf3", // This is the main background color
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      }
    ]
  },
  // --- End of Fix ---
}