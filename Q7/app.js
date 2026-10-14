// Module Import (10 Marks)
const os = require('os');
const fs = require('fs');

// Get System Data (10 Marks)
const platform = os.platform();
const homeDir = os.homedir();

// Write to File (20 Marks)
const infoString = "My OS is: " + platform + " and my home folder is: " + homeDir;
fs.writeFileSync('info.txt', infoString);

// Print to Terminal (10 Marks)
console.log("File created successfully!");