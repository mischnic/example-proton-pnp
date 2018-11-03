import fs from 'fs';

console.log(fs.readFileSync("package.json", {encoding: "utf-8"}));
