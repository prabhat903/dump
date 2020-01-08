const fs = require('fs');

let  t = async function (){
    let m = await fs.statSync('./imgs/error.wmv')
   
    return m;
};
let k = t(); 
setImmediate(k.then,e=>console.log(e));
setTimeout(console.log,0,k)