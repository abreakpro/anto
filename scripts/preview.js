const fs   = require("fs");
const path = require("path");

const rootDir = "preview/dist";
const css     = fs.readFileSync(path.join(rootDir, "umi.css"), "utf-8");
const html    = fs.readFileSync(path.join(rootDir, "index.html"), "utf-8");
const js      = fs.readFileSync(path.join(rootDir, "umi.js"), "utf-8");

const Data = { css, html, js };
fs.writeFileSync("src/preview.json", JSON.stringify(Data));

console.log(JSON.stringify(Data))