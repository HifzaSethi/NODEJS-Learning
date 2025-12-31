const path = require("path");
module.exports = path.dirname(require.main.filename);

// this is file helper by which we can get the root directory of the project
// require.main.filename will give the path of the main file which is app.js in our case
// path.dirname will give the directory name of that file
// so this will give the root directory of the project
// now we can use this root directory in other files to construct the absolute path of other files
