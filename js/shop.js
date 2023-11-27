let shop = document.querySelector('#shop');

let shopItemsData = [{
	id: "smwlp",
	title: "Supermassive - White LP",
	price: 30,
	img: "./assets/images/shop-images/Supermassive-white-LP.jpg"
},
{
	id: "smlp",
	title: "Supermassive - LP",
	price: 25,
	img: "./assets/images/shop-images/Supermassive-LP.jpg"
},
{
	id: "smcd",
	title: "Supermassive - CD",
	price: 15,
	img: "./assets/images/shop-images/Supermassive-CD.jpeg"
},
{
	id: "otdlp",
	title: "On this day - LP",
	price: 25,
	img: "./assets/images/shop-images/OTD-LP.jpg"
},
{
	id: "otdcd",
	title: "On this day - CD",
	price: 15,
	img: "./assets/images/shop-images/OTD-CD.jpeg"
},
{
	id: "nslp",
	title: "Nightscape - LP",
	price: 25,
	img: "./assets/images/shop-images/nightscape-LP.jpg"
},
{
	id: "nscd",
	title: "Nightscape - CD",
	price: 15,
	img: "./assets/images/shop-images/nightscape-CD.jpeg"
},
{
	id: "mplp",
	title: "Meeting point - LP",
	price: 25,
	img: "./assets/images/shop-images/meeting-point_LP.jpeg"
},
{
	id: "mpcd",
	title: "Meeting point - CD",
	price: 15,
	img: "./assets/images/shop-images/meeting-point_CD.jpeg"
},
{
	id: "glcd",
	title: "Guiding light - CD",
	price: 15,
	img: "./assets/images/shop-images/guiding-light-CD.jpeg"
},
{
	id: "dcd",
	title: "Directions - CD",
	price: 15,
	img: "./assets/images/shop-images/directions_CD.jpeg"
}
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
	return (shop.innerHTML = shopItemsData
		.map((x)=>{
			let { id, title, price, img } = x;
			let search = basket.find((x) => x.id === id) || [];
		return `
		<div id=product-id-${id} class="item">
				<img class="shop-images" src=${img} alt="">
				<div class="details">
					<h3>${title}</h3>
					<div class="price-quantity">
						<h3>€ ${price}</h3>
						<div class="buttons">
							<img onclick="decrement(${id})" src="./assets/images/icons/black/minus-square-black.svg" alt="">
							<h3 id=${id} class="quantity">
								${search.item === undefined? 0 : search.item}
							</h3>
							<img onclick="increment(${id})" src="./assets/images/icons/black/plus-square-black.svg" alt="">
						</div>
					</div>
				</div>
			</div>
		`;
	}).join(""));
};

generateShop()

let increment = (id) => {
	let selectedItem = id;
	let search = basket.find((x)=> x.id == selectedItem.id);
	
	if (search === undefined) {
		basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else {
		search.item += 1;
	}
	localStorage.setItem("data", JSON.stringify(basket));

	update(selectedItem.id);
};
let decrement = (id) => {
	let selectedItem = id;
	let search = basket.find((x)=> x.id == selectedItem.id);
	
	if (search === undefined) return;
	else if (search.item === 0) return;
	 else {
		search.item -= 1;
	}
	update(selectedItem.id);
	basket = basket.filter((x) => x.item !== 0);

	
	localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
	let search = basket.find((x) => x.id === id);

	document.querySelector((`#${id}`)).innerHTML = search.item;
	calculation();
};

let calculation = () => {
	let cartIcon = document.querySelector("#cartAmount");
	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x+y, 0);
};

calculation();