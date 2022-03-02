"use strict";
const fs = require('fs');
const readstream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writestream = fs.createWriteStream('./docs/blog4.txt', { encoding: 'utf8' });
// readstream.on('data', (chunk:any) => {
//   console.log('------ NEW CHUNK -------')
//   console.log(chunk)
//   writestream.write('\nNEW CHUNK\n')
//   writestream.write(chunk)
// })
// piping
readstream.pipe(writestream);
