const path = require('path')

//Base file name
console.log(path.basename(__filename))
//turns into relative, rather than abs path

//Directory Name
console.log(path.dirname(__filename))
//__dirname would give us the same but we're using the path module...

//file extention
console.log(path.extname(__filename))

//create path object
console.log(path.parse(__filename))

//concatenate paths
console.log(path.join(__dirname, 'test', hello.html))
