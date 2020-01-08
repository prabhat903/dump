import Element from "./render";
import product from "./component/ProductCard";
import Cart from "./component/Cart";
const products = [
    {
      productId: "p1",
      productName: "car",
      price: 5000,
      url: "./imgs/car.jpg"
    },
    {
      productId: "p2",
      productName: "Bike",
      price: 7894,
      url: "./imgs/bike.jpg"
    },
    {
      productId: "p3",
      productName: "Bus",
      price: 4560,
      url: "./imgs/bus.jpg"
    }
  ],
  addToCart = function(value) {
    cart.updateSum(value);
  },
  removeFromCart = function(value) {
    cart.reduceSum(value);
  };
let cart = Cart();

let node = {
  name: "div",
  id: "App",
  children: [
    {
      name: "div",
      className: "ProductList",
      children: products.map(ele =>
        product({ product: ele, addToCart, removeFromCart })
      )
    },
    cart,
    {
      name: "div",
      className: "ProductList",
      children: products.map(ele =>
        product({ product: ele, addToCart, removeFromCart })
      )
    }
  ]
};

let root = new Element(node, document.getElementById("root"));
root.render();

// const DelayLog = function(displayThis, time) {
//   return setTimeout(() => {
//     console.log(displayThis);
//   }, time);
// };

// const add = function(a, b, onresult) {
//   setTimeout(() => {
//     onresult(a+ b);
//   }, 1000);
// };
// const multiply = function(a, b,onresult) {
//   setTimeout(() => {
//     onresult(a * b);
//   }, 2000);
// };

// const check = function(a, onresult) {
//   if (a > 0) onresult(a);
//   else onresult("error");
// };

// add(2,5,(a)=>{
//   multiply(a,5,(b)=>{
//     check(b,(c)=>{
//       DelayLog(c,2000);
//     })
//   })
// })

// const DelayLog = function(displayThis, time) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(displayThis);
//       res()
//     }, time);
//   });
// };

// const add = function(a, b) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(a + b);
//     }, 1000);
//   });
// };
// const multiply = function(a, b) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(a * b);
//     }, 2000);
//   });
// };

// const check = function(a) {
//   return new Promise((res, rej) => {
//     if (a > 0) res(a);
//     else rej("error");
//   });
// };

// add(2, 5)
//   .then(r => multiply(r, 0))
//   .then(r => check(r))
//   .then(r => DelayLog(r, 2000))
//   .catch(e => {
//     console.log(e);
//   })
//   .finally(e => {
//     console.log("end");
//   });

const DelayLog = async function(displayThis, time) {
  await new Promise((res, rej) => {
    setTimeout(() => {
      console.log(displayThis);
      res();
    }, time);
  });
};

const add = async function(a, b) {
  return new Promise((res, rej) => {
  setTimeout(() => {
      res(a + b);
    },1000);
  });
};
const multiply = function(a, b) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a * b);
    }, 2000);
  });
};

const check = function(a) {
  if (a > 0) return Promise.resolve(a);
  return Promise.reject("error");
};

let p = async () => {
  try{
    let r1 = await add(2, 5);
    let r2 = await multiply(r1, 0);
    let r3 = await check(r2);
    DelayLog(r3, 2000);
  }
  catch(err){
    DelayLog(err,5500);
  }
};
p();
