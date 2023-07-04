   

let closeShopping = document.querySelector('.close');
let totalShopping = document.querySelector('.total');
let checkoutShopping = document.querySelector('.checkout');
let cartlistShopping = document.querySelector('.cart-list');
let cartShopping = document.querySelector('.cart');
let shoppingList = document.querySelector('.list');
let shoppingQuantity = document.querySelector('.quantity');
let openShop = document.querySelector('.shop');
let containerShopping = document.querySelector('.container');
let mainBody = document.querySelector('.shop-body');

openShop.addEventListener('click', () => {
	mainBody.classList.add('active');
	console.log("hlw");
});

closeShopping.addEventListener('click', () => {
	console.log("hlw");
	mainBody.classList.remove('active');
});

let productList = [
	{
		id : 1,
		name : "Apple iPhone 13",
		image : "asset/images/apple4.png",
		price : 72990,
	},
	{
		id : 2,
		name : "iQOO Neo 6",
		image : "asset/images/iQOO Neo2 6.jpg",
		price : 29999,
	},
	{
		id : 3,
		name : "Redmi K50i",
		image : "asset/images/redmi4.png",
		price : 27999,
	},
	{
		id : 4,
		name : "Hasbro Battleship",
		image : "asset/images/battleship.jpg",
		price : 1092,
	},
	{
		id : 5,
		name : "Beyblade",
		image : "asset/images/bayblade.jpg",
		price : 1349,
	},
	{
		id : 6,
		name : "Clash of Cyborg",
		image : "asset/images/bettlegame.jpg",
		price : 689,
	},
	{
		id : 7,
		name : "Gesto Wall Lights",
		image : "asset/images/gesto.jpg",
		price : 399,
	},
	{
		id : 8,
		name : "Gojeeva ",
		image : "asset/images/gojeeva.jpg",
		price : 340,
	},
	{
		id : 9,
		name : "LIODOR",
		image : "asset/images/LIDOR.jpg",
		price : 649,
	},
	]

let listCard = [];

function shoppingCard(){
	productList.forEach((value, key) => {
		let myDiv = document.createElement("div");
		myDiv.classList.add('item');
		myDiv.classList.add('col-md-4');
		myDiv.innerHTML = `
			<img src="${value.image}">
			<h3 class="title">${value.name}</h3>
			<h5>₹${value.price}</h5>
			<button class="cart-btn" onclick="addtoCart(${key})">Add to Cart</button>
		`;
		shoppingList.appendChild(myDiv);

	})
} 
shoppingCard();

function addtoCart(key){
	if(listCard[key] == null){
		listCard[key] = productList[key];
		listCard[key].quantity = 1;
		console.log(listCard, "1");
	}
	// console.log(listCard, "2");
	cartReload();
}

function cartReload(){
	cartlistShopping.innerHTML = " ";
	let count = 0;
	let totalPrice = 0;
	listCard.forEach((value,key) => {
		totalPrice = totalPrice + value.price;
		count = count + value.quantity;

		if(value != null){
			let newDiv = document.createElement("li");
			newDiv.classList.add('row');
			newDiv.classList.add('aboutCart');
			newDiv.innerHTML = `
				<div class="col-md-7 aboutCart">
					<div><img class="cart-img" src="${value.image}"></div>
					<div>${value.name}</div>
				</div>
				<div class="col-md-2">${value.price}</div>
				<div class="changeQuantity col-md-3">
					<button onclick="changeQuantity(${key},${value.quantity+1})">+</button>
					<div class="count">${value.quantity}</div>
					<button onclick="changeQuantity(${key},${value.quantity-1})">-</button>
				</div>`;
			cartlistShopping.appendChild(newDiv);
		}
	})
	totalShopping.innerText = totalPrice;
	shoppingQuantity.innerText = count;
}

function changeQuantity(key,quantity){
	if(quantity === 0){
		delete listCard[key];
	}else{
		listCard[key].quantity = quantity;
		listCard[key].price = quantity*productList[key].price;
	}
	cartReload();
}

