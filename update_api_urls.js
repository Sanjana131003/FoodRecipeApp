const fs = require("fs");
const path = require("path");

const srcDir = "foodRecipe/frontend/food-blog-app/src";

function getAllJSX(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) files = files.concat(getAllJSX(full));
    else if (f.endsWith(".jsx") || f.endsWith(".js")) files.push(full);
  });
  return files;
}

const files = getAllJSX(srcDir);
let totalReplaced = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  // Replace all hardcoded localhost:5000 with env variable
  content = content.replace(/http:\/\/localhost:5000/g, "import.meta.env.VITE_API_URL || 'http://localhost:5000'");
  // That's too verbose - use a cleaner approach with a constant
  // Reset and do it properly
  content = original;
  if (content.includes("http://localhost:5000")) {
    // Add API_URL constant after imports if not already there
    const hasApiUrl = content.includes("const API_URL") || content.includes("VITE_API_URL");
    if (!hasApiUrl) {
      // Insert after last import line
      const lines = content.split("\n");
      let lastImport = 0;
      lines.forEach((line, i) => { if (line.trim().startsWith("import ")) lastImport = i; });
      lines.splice(lastImport + 1, 0, "\nconst API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'");
      content = lines.join("\n");
    }
    content = content.replace(/http:\/\/localhost:5000/g, "${API_URL}");
    // Fix template literals - replace "string" with `template`
    content = content.replace(/"(\$\{API_URL\}[^"]*)"/g, "`$1`");
    content = content.replace(/'(\$\{API_URL\}[^']*)'/g, "`$1`");
    fs.writeFileSync(file, content, "utf8");
    const count = (original.match(/http:\/\/localhost:5000/g) || []).length;
    totalReplaced += count;
    console.log("Updated:", file.replace("foodRecipe/frontend/food-blog-app/src/", ""), "(" + count + " URLs)");
  }
});

console.log("\nTotal URLs replaced:", totalReplaced);
