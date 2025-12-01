// Tailwind.config.js
module.exports = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
};
