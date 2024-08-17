/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutral Colors
        "white-100": "#FFFFFF",
        "black-100": "#000000",
        "black-90": "rgba(0,0,0,0.9)",
        "black-80": "rgba(0,0,0,0.8)",
        "black-70": "rgba(0,0,0,0.7)",
        "black-60": "rgba(0,0,0,0.6)",
        "black-50": "rgba(0,0,0,0.5)",
        "black-40": "rgba(0,0,0,0.4)",
        "black-30": "rgba(0,0,0,0.3)",
        "black-20": "rgba(0,0,0,0.2)",
        "black-10": "rgba(0,0,0,0.1)",
        "true-gray-900": "#171717",
        "true-gray-800": "#262626",
        "true-gray-700": "#404040",
        "true-gray-600": "#525252",
        "true-gray-500": "#737373",
        "true-gray-400": "#A3A3A3",
        "true-gray-300": "#D4D4D4",
        "true-gray-200": "#E5E5E5",
        "true-gray-100": "#F5F5F5",
        "true-gray-50": "#FAFAFA",

        // Primary Colors
        "yellow-900": "#9B660A",
        "yellow-800": "#E3960F",
        "yellow-700": "#F1AC34",
        "yellow-600": "#F3B64C",
        "yellow-500": "#F6C878",
        "yellow-400": "#F7CE87",
        "yellow-300": "#F9D8AB",
        "yellow-200": "#FBE7C3",
        "yellow-100": "#FDF0DB",
        "yellow-50": "#FEFAF3",

        // Colored - Green
        "green-900": "#63685A",
        "green-800": "#858B77",
        "green-700": "#A6AD95",
        "green-600": "#C7D0B3",
        "green-500": "#DDE7C7",
        "green-400": "#E6EDD5",
        "green-300": "#ECF2E0",
        "green-200": "#F1F5E9",
        "green-100": "#F7F9F1",
        "green-50": "#FCFDF9",

        // Colored - Blue
        "blue-900": "#626667",
        "blue-800": "#838889",
        "blue-700": "#A4AAAC",
        "blue-600": "#C4C8CE",
        "blue-500": "#DAE3E5",
        "blue-400": "#E3EAEC",
        "blue-300": "#EBF0F1",
        "blue-200": "#F0F4F5",
        "blue-100": "#F6F8F9",
        "blue-50": "#FBFCFC",

        // Error
        error: "#D94F14",
      },
      placeholderColor: {
        "black-20": "rgba(0,0,0,0.2)",
      },
      backgroundImage: {
        "yellow-linear": "linear-gradient(90deg, #FFE285 0%, #E6CB78 100%)",
      },
    },
  },
  plugins: [],
};
