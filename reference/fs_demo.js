const fs = require('fs')
const path = require('path')

// //create folderr

// // fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
// //   if (err) throw err
// //   console.log('Folder Created')
// // })

// // create and write to file

// fs.writeFile(
//   path.join(__dirname, '/test', 'fuckbootcamp.txt'),
//   "they wrote him off as shit and didn't see the punches venegance land",
//   () => {
//     fs.appendFile(
//       path.join(__dirname, '/test', 'fuckbootcamp.txt'),
//       'venegance slaked...he slunk off...and watched football, drank weissbiere made 30k forever.  The tutor caught leukaemia and shrivelled.  No more Polish girls',
//       function (err) {
//         if (err) throw err
//         console.log('File appended')
//       }
//     )
//   }
// )

//read file system

// fs.readFile(path.join(__dirname, '/test','fuckbootcamp.txt'), 'utf8', function (err, data) {
//   if (err) throw err
//   console.log(data)
// })

//renamefile
fs.rename(
  path.join(__dirname, '/test', 'fuckbootcamp.txt'),
  path.join(__dirname, './test', 'fucktrilogy.txt'),
  function (err) {
    if (err) throw err
    console.log('Folder Created')
  }
)
