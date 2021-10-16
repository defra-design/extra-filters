# extra-filters

## About the module

This is a module that extends the filter functionality of the gov-uk prototype kit, by adding an extra-filters file.

The extra-filters file contains a list of custom filters that help to solve common prototyping challenges.

## Installation instructions

`npm install @defra-design/extra-filters`

This will copy the _extra-filters.js_ file to your prototype.

The next step is to include the file into the application. You can either modify your _utils.js_ file
(`app/views/lib/util.js`) to reference the new file or run the _autoSetup.js_ script to do this automatically. 

Modify the _utils.js_ file by inserting the new filters into the existing _addNunjucksFilters_ function, eg:

```JavaScript
exports.addNunjucksFilters = function (env) {
  var coreFilters = require('./core_filters.js')(env)
  var customFilters = require('../app/filters.js')(env)
  var extraFilters = require('../app/extra-filters.js')(env) 
  var filters = Object.assign(coreFilters, customFilters, extraFilters)
  Object.keys(filters).forEach(function (filterName) {
    env.addFilter(filterName, filters[filterName])
  })
}
```

Or you can run the autosetup script. To run the autosetup script.

`cd /{Your prototype directory}/node_modules/@defra-design/extra-filters`

  `npm run autosetup`
        
## Contributing

If you’ve got an idea or suggestion you can:

* [get in touch with me on slack] @ChrisBarret_defra
