const fs = require("fs");
const path = require("path");

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith(".tsx")) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getFiles("./src");
files.forEach(f => {
  const content = fs.readFileSync(f, "utf8");
  const regex = /<section[\s\S]*?>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const tag = match[0].replace(/\s+/g, " ");
    if (tag.includes("className")) {
      console.log(path.relative(".", f) + " -> " + tag);
    }
  }
});
