// Import the filesystem module
const fs = require('fs');

fs.readFile("../../../lib/utils.js", 'utf8', function(err, data) {
  let re = new RegExp(/(var filters \= Object.assign\(coreFilters, customFilters\))/, 'gm');
  let formatted = data.replace(re, "var extraFilters = require('../app/extra-filters.js')(env)\n\tvar filters = Object.assign(coreFilters, extraFilters, customFilters)");

  fs.writeFile("../../../lib/utils.js", formatted, 'utf8', function(err) {
    if (err) { return console.log(err);
  } else {

		// Get the current filenames
		// after the function
		console.log("\nFile Contents of copied_file:",
		fs.readFileSync("../../../lib/utils.js", "utf8"));
		console.log("\nauto setup success");
	 }
  });
});
