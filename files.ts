// const fs = require('fs')

// reading files
// fs.readFile('./docs/blog1.txt', (err:any, data:any) => {
//   if(err){
//     console.log(err)
//   }
//   console.log(data.toString())
// })

// console.log('last line')
// writing files
// fs.writeFile('./docs/blog2.txt', 'Hello, Greg', (err:any, data:any)=>{
//   console.log('file was written')
// })


// directories
if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err:object)=>{
  if(err) {
    console.log(err)
  }
  console.log('folder created')
})
} else {
  fs.rmdir('./assets',(err:object)=>{
  if(err) {
    console.log(err)
  }
  console.log('folder deleted')})
}

if(!fs.existsSync('./doc/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (err:any) => {
    if (err) {
      console.log(err)
    }
    console.log('File gone')
  })
}