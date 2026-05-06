const fs = require("fs");
const f = "foodRecipe/frontend/food-blog-app/src/pages/Home.jsx";
let c = fs.readFileSync(f, "utf8");
if (c.includes("http://localhost:5000")) {
  const lines = c.split("\n");
  let lastImport = 0;
  lines.forEach((line, i) => { if (line.trim().startsWith("import ")) lastImport = i; });
  lines.splice(lastImport + 1, 0, "\nconst API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'");
  c = lines.join("\n");
  c = c.replace(/http:\/\/localhost:5000/g, "${API_URL}");
  c = c.replace(/'(\$\{API_URL\}[^']*)'/g, "`$1`");
  c = c.replace(/"(\$\{API_URL\}[^"]*)"/g, "`$1`");
  fs.writeFileSync(f, c, "utf8");
  console.log("Home.jsx updated");
} else {
  console.log("Home.jsx already clean");
}
