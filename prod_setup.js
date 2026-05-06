const fs = require("fs");

// ── 1. Backend server.js ─────────────────────────────────────────────────────
const server = [
  "const express = require('express')",
  "const app = express()",
  "const dotenv = require('dotenv').config()",
  "const connectDb = require('./config/connectionDb')",
  "const cors = require('cors')",
  "const path = require('path')",
  "",
  "const PORT = process.env.PORT || 5000",
  "",
  "const allowedOrigins = process.env.FRONTEND_URL",
  "  ? [process.env.FRONTEND_URL, 'http://localhost:5173', 'http://localhost:5174']",
  "  : ['http://localhost:5173', 'http://localhost:5174']",
  "",
  "app.use(cors({",
  "  origin: function (origin, callback) {",
  "    if (!origin || allowedOrigins.indexOf(origin) !== -1) {",
  "      callback(null, true)",
  "    } else {",
  "      callback(new Error('Not allowed by CORS'))",
  "    }",
  "  },",
  "  credentials: true",
  "}))",
  "",
  "app.use(express.json())",
  "app.use(express.urlencoded({ extended: true }))",
  "app.use('/images', express.static(path.join(__dirname, 'public/images')))",
  "",
  "connectDb()",
  "",
  "app.use('/', require('./routes/user'))",
  "app.use('/recipe', require('./routes/recipe'))",
  "app.use('/recipe', require('./routes/seed'))",
  "",
  "app.get('/health', (req, res) => res.json({ status: 'ok' }))",
  "",
  "app.use((err, req, res, next) => {",
  "  console.error(err.stack)",
  "  res.status(500).json({ message: 'Internal server error' })",
  "})",
  "",
  "app.listen(PORT, () => {",
  "  console.log('Server running on port ' + PORT)",
  "})"
].join("\n");

fs.writeFileSync("foodRecipe/backend/server.js", server, "utf8");
console.log("1. server.js written");

// ── 2. Backend .env.example ──────────────────────────────────────────────────
const envExample = [
  "PORT=5000",
  "CONNECTION_STRING=mongodb+srv://<user>:<password>@cluster.mongodb.net/foodRecipe",
  "SECRET_KEY=your_super_secret_jwt_key_here",
  "FRONTEND_URL=https://your-frontend.vercel.app"
].join("\n");
fs.writeFileSync("foodRecipe/backend/.env.example", envExample, "utf8");
console.log("2. .env.example written");

// ── 3. Backend package.json - add start script ───────────────────────────────
const pkg = JSON.parse(fs.readFileSync("foodRecipe/backend/package.json", "utf8"));
pkg.scripts = pkg.scripts || {};
pkg.scripts.start = "node server.js";
pkg.engines = { node: ">=18.0.0" };
fs.writeFileSync("foodRecipe/backend/package.json", JSON.stringify(pkg, null, 2), "utf8");
console.log("3. package.json updated");

// ── 4. Vite config - set base and build options ──────────────────────────────
const viteConfig = [
  "import { defineConfig } from 'vite'",
  "import react from '@vitejs/plugin-react'",
  "",
  "export default defineConfig({",
  "  plugins: [react()],",
  "  build: {",
  "    outDir: 'dist',",
  "    sourcemap: false,",
  "    rollupOptions: {",
  "      output: {",
  "        manualChunks: {",
  "          vendor: ['react', 'react-dom', 'react-router-dom'],",
  "          motion: ['framer-motion'],",
  "        }",
  "      }",
  "    }",
  "  },",
  "  server: {",
  "    port: 5173",
  "  }",
  "})"
].join("\n");
fs.writeFileSync("foodRecipe/frontend/food-blog-app/vite.config.js", viteConfig, "utf8");
console.log("4. vite.config.js written");

// ── 5. Frontend .env.example ─────────────────────────────────────────────────
const frontendEnv = "VITE_API_URL=https://your-backend.onrender.com";
fs.writeFileSync("foodRecipe/frontend/food-blog-app/.env.example", frontendEnv, "utf8");
const frontendEnvLocal = "VITE_API_URL=http://localhost:5000";
fs.writeFileSync("foodRecipe/frontend/food-blog-app/.env", frontendEnvLocal, "utf8");
console.log("5. frontend .env files written");

// ── 6. Vercel config for frontend ────────────────────────────────────────────
const vercelJson = JSON.stringify({
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}, null, 2);
fs.writeFileSync("foodRecipe/frontend/food-blog-app/vercel.json", vercelJson, "utf8");
console.log("6. vercel.json written");

// ── 7. Render config for backend ─────────────────────────────────────────────
const renderYaml = [
  "services:",
  "  - type: web",
  "    name: dishdairy-backend",
  "    env: node",
  "    buildCommand: npm install",
  "    startCommand: npm start",
  "    envVars:",
  "      - key: NODE_ENV",
  "        value: production",
  "      - key: PORT",
  "        value: 5000",
  "      - key: CONNECTION_STRING",
  "        sync: false",
  "      - key: SECRET_KEY",
  "        sync: false",
  "      - key: FRONTEND_URL",
  "        sync: false"
].join("\n");
fs.writeFileSync("foodRecipe/backend/render.yaml", renderYaml, "utf8");
console.log("7. render.yaml written");

// ── 8. .gitignore for backend ────────────────────────────────────────────────
const backendGitignore = [
  "node_modules/",
  ".env",
  "public/images/*",
  "!public/images/.gitkeep"
].join("\n");
fs.writeFileSync("foodRecipe/backend/.gitignore", backendGitignore, "utf8");
console.log("8. backend .gitignore written");

// ── 9. .gitignore for frontend ───────────────────────────────────────────────
const frontendGitignore = [
  "node_modules/",
  "dist/",
  ".env",
  ".env.local"
].join("\n");
fs.writeFileSync("foodRecipe/frontend/food-blog-app/.gitignore", frontendGitignore, "utf8");
console.log("9. frontend .gitignore written");

// ── 10. public/images/.gitkeep ───────────────────────────────────────────────
fs.writeFileSync("foodRecipe/backend/public/images/.gitkeep", "", "utf8");
console.log("10. .gitkeep written");

console.log("\nAll production files created successfully!");
