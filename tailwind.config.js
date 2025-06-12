// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        foodloop: {
          "primary": "#65A30D",
          "secondary": "#F97316",
          "accent": "#FCD34D",
          "neutral": "#1E293B",
          "base-100": "#ffffff",
          "info": "#38BDF8",
          "success": "#22C55E",
          "warning": "#FBBF24",
          "error": "#EF4444",
        },
      },
      {
        foodloopdark: {
          "primary": "#A3E635",
          "secondary": "#FB923C",
          "accent": "#FDE68A",
          "neutral": "#0F172A",
          "base-100": "#1E293B",
          "info": "#0EA5E9",
          "success": "#16A34A",
          "warning": "#FACC15",
          "error": "#DC2626",
        },
      },
    ],
  },
};
