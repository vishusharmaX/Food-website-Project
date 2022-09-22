let carts = document.querySelectorAll('.add-cart');
let products =[
    {
        name: 'Burger',
        tag :"Burger",
        price : 100,
        inCart :0
    },
    {
        name: ' Pepperoni pizza',
        tag :" Pepperoni pizza",
        price : 100,
        inCart :0
    },
    {
        name: 'Tuna Melt',
        tag :"Tuna Melt",
        price : 100,
        inCart :0
    },
    {
        name: 'Veg Noodles',
        tag :"Veg Noodles",
        price : 100,
        inCart :0
    },
    {
        name: 'Spring Roll',
        tag :"Spring Roll",
        price : 100,
        inCart :0
    },
    {
        name: 'French Fries',
        tag :"French Fries",
        price : 100,
        inCart :0
    },
    {
        name: 'Chocolate Icecream',
        tag :"Chocolate Icecream",
        price : 100,
        inCart :0
    },
    {
        name: 'Angel Cake',
        tag :"Angel Cake",
        price : 100,
        inCart :0
    },
    {
        name: 'Lamington Cake',
        tag :"Lamington Cake",
        price : 100,
        inCart :0
    }, {
        name: 'Moon Cake',
        tag :"Moon Cake",
        price : 100,
        inCart :0
    }, {
        name: 'Fruit Cake',
        tag :"Fruit Cake",
        price : 100,
        inCart :0
    }, {
        name: 'Halloween Cake',
        tag :"Halloween Cake",
        price : 100,
        inCart :0
    }, {
        name: 'Kadai Paneer',
        tag :"Kadai Paneer",
        price : 100,
        inCart :0
    }, {
        name: 'Aloo Paratha',
        tag :"Aloo Paratha",
        price : 100,
        inCart :0
    }, {
        name: 'Matara Paneer',
        tag :"Matara Paneer",
        price : 100,
        inCart :0
    }, {
        name: 'Dum Aloo',
        tag :"Dum Aloo",
        price : 100,
        inCart :0
    }, {
        name: 'Mix-Vegetable',
        tag :"Mix-Vegetable",
        price : 100,
        inCart :0
    }, {
        name: 'Malia Kofta',
        tag :"Malia Kofta",
        price : 100,
        inCart :0
    }, {
        name: 'Dosa',
        tag :"Dosa",
        price : 100,
        inCart :0
    }, {
        name: 'Idli',
        tag :"Idli",
        price : 100,
        inCart :0
    }, {
        name: 'Mutton Vadai',
        tag :"Mutton Vadai",
        price : 100,
        inCart :0
    }, {
        name: 'Pickles and Pappadams',
        tag :"Pickles and Pappadams",
        price : 100,
        inCart :0
    }, {
        name: 'Kerela Fish Cury',
        tag :"Kerela Fish Cury",
        price : 100,
        inCart :0
    }, {
        name: 'Masala Dosa',
        tag :"Masala Dosa",
        price : 100,
        inCart :0
    }

]

function cut(){
    // document.getElementsByClassName("atn").innerHTML = "";
    document.write("Items is Removed from Cart ");
}
for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumbers(){
    let productNumbers =localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent =productNumbers;
    }
}
function cartNumbers(product) {
    console.log("The product click is",product);
    let productNumbers =localStorage.getItem('cartNumbers');
   
    productNumbers = parseInt(productNumbers);
   
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent =productNumbers + 1;
    }
    else{
        
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(product);
}
function setItem(product){
  let cartItems = localStorage.getItem('productInCart');
  cartItems =JSON.parse(cartItems);

  if (cartItems !=null){
    if (cartItems[product.tag] == undefined){
        cartItems ={
            ...cartItems,
            [product.tag]:product
        }
    }
    cartItems[product.tag].inCart += 1;
  }
  else{
    
     product.inCart =1;
     cartItems={
      [product.tag]:product
    }
  }
    
    
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
    // console.log("The product price is ",product.price)
    let cartCost =localStorage.getItem('totalCost');
    cartCost =parseInt(cartCost);
    console.log("My cartCost is ",cartCost);
    console.log(typeof cartCost);
    if (cartCost !=null){
        localStorage.setItem("totalCost",cartCost + product.price);
    }
    else{

        localStorage.setItem("totalCost",product.price);
    }
}
function displayCart(){
    let cartItems =localStorage.getItem("productInCart");
    cartNumbers =JSON.parse(cartItems);
    let productContainer =document.querySelector("products-container");
    console.log(cartItems);
    if (cartItems&& productContainer ){
        productContainer.innerHTML ='';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML +=`
            <div class ="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="./image/${item.tag}.jpg">
            <span>${item.name}M</span>

            `
        })


    }
}
onLoadCartNumbers();




