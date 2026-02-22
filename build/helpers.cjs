const glob = require("glob");
const path = require("path");

const getJsEntries = (scriptsDir) => {
  const scriptFiles = glob.sync(path.join(scriptsDir, "**", "*.entry.js"));
  const entries = {};

  scriptFiles.forEach((filePath) => {
    const relativePath = path.relative(scriptsDir, filePath);
    const entryName = relativePath.replace(/\.js$/, "").replace(/\\/g, "/");
    entries[entryName] = filePath;
  });
  return entries;
};

module.exports = {getJsEntries};