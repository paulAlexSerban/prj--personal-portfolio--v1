const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const SRC_SCRIPTS_DIR = path.join(__dirname, "..", "src", "scripts");
const DIST_DIR = path.join(__dirname, "..", "dist");

module.exports = { PUBLIC_DIR, SRC_SCRIPTS_DIR, DIST_DIR };
