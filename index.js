const fs = require('fs');

const crypto = require('crypto');
const start = Date.now();

// process.env.UV_THREADPOOL_SIZE = 4


// fs.writeFile('./docs/newFile.pdf',"Hello world", ()=>{
//   console.log("write file process done")
// })

// setTimeout(()=>{
//   console.log('________________')
//   console.log('Timer 1 finished')
//   console.log('________________')
// }, 0)

// setImmediate(()=>{
//   console.log('Immediate 1 finished');  
//   console.log('________________')
// })

// fs.readFile('./docs/newFile.pdf', ()=>{
// console.log("I/O finished")
// console.log('________________')
// })

// console.log('Server runnning on hope')


// setTimeout(()=>{
//   console.log('________________')
//   console.log('Timer 1 finished')
//   console.log('________________')
// }, 0)

// setImmediate(()=>{
//   console.log('Immediate 1 finished');  
//   console.log('________________')
// })

fs.readFile('./docs/newFile.pdf', ()=>{
  console.log("I/O finished")
  console.log('________________')

//   setTimeout(()=>{
//     console.log('________________')
//     console.log('Timer 2 finished')
//     console.log('________________')
// }, 0)

  // setTimeout(()=>{
  //   console.log('Immediate 3 finished');  
  //   console.log('________________')
  //   process.nextTick(()=> console.log('Process.nextTick()'))
  // }, 3000)
  // setImmediate(()=>{
  //   console.log('Immediate 2 finished');  
  //   console.log('________________')
  // })
  
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=> {
    console.log( Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=> {
    console.log( Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=> {
    console.log( Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=> {
    console.log( Date.now() - start, 'Password encrypted')
  })
})



console.log('Server runnning on hope')

//libuV
//FIFO first in first out
// event-loop and threadPool