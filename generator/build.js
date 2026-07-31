import fs from "fs";
import path from "path";

import { hero } from "./sections/hero.js";

const ASSETS_DIR = "./assets";

// Create assets directory if it doesn't exist
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// Helper function to write SVG files
function writeSVG(filename, content) {
  const filePath = path.join(ASSETS_DIR, filename);

  fs.writeFileSync(filePath, content, "utf8");

  console.log(`✅ Generated ${filename}`);
}

// Generate Hero Banner
writeSVG("hero.svg", hero());

console.log("\n🎉 Build completed successfully!");