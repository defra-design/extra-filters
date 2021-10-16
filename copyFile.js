// Import the filesystem module
const fs = require('fs');

// Get the current filenames
// before the function
getCurrentFilenames();
console.log("\nFile Contents of example_file:",
fs.readFileSync("extra-filters.js", "utf8"));

// Copying the file to folder using the same name
fs.copyFile("extra-filters.js", "../../../app/extra-filters.js", (err) => {
if (err) {
	console.log("Error Found:", err);
}
else {

	// Get the current filenames
	// after the function
	getCurrentFilenames();
	console.log("\nFile Contents of copied_file:",
	fs.readFileSync("../../../app/extra-filters.js", "utf8"));
}
});

// Function to get current filenames
// in directory
function getCurrentFilenames() {
console.log("\nCurrent filenames:");
fs.readdirSync(__dirname).forEach(file => {
	console.log(file);
		console.log("successfully coppied extra-filters.js");
});
}
