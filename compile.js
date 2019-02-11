const path = require("path");
const fs = require("fs");

// dirname = constant defined by Node.
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");

// Open and read Solidity file.
const source = fs.readFileSync(inboxPath, "utf8");

// Logs output.
console.log(solc.compile(source, 1));
