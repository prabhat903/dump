function Product({product,addToCart,removeFromCart}){
  var quantityAdded = 0; 
  var Element = {
    name: "div",
    className: "card",
    children: [
      {
        name: "h1",
        children: product.productName,
      },
      {
        name:"img",
        className:"productImg",
        attr:{
          src:product.url
        }
      },
      {
        name: "p",
        children: "Product Discription",
      },
      {
        name:'div',
        children:[
          {
            name:"span",
            children : ()=>(`Price ${product.price} Rs`)
          },
          {
            name: "button",
            events:{
              click:function(context,event){
                quantityAdded++;
                addToCart(product.price);
                context.render();
              }
            },
            children:()=>(`Add ${quantityAdded}`)
          },
          {
            name: "button",
            events:{
              click:function(context,event){
                quantityAdded--;
                removeFromCart(product.price);
                Element.update();
              }
            },
            children: `-`
          }
        ]
      },
    ]
  };
  return Element;
}


  export default Product;