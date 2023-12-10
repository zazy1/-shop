let tmp = false;
let moneyBasket = document.querySelector(".basket_price")
let priceBasket = document.querySelector(".sp").innerHTML
priceBasket = parseInt(priceBasket)
const basket_buy = document.getElementById("btn")
console.log(priceBasket);
let bank = 0
function buy() {
	if (!tmp) {
		basket_buy.style.background = "yellow";
		basket_buy.innerHTML = "В корзине"
		tmp = true;
		bank = bank + priceBasket
	}
	else {
		basket_buy.style.background = "white";
		basket_buy.innerHTML = "Купить	"
		tmp = false;
		bank = bank - priceBasket
	}
	moneyBasket.innerHTML = bank
}
