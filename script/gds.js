const gds = document.createElement("li")
gds.classList.add("gds_li")
let list = document.querySelector(".gds_ul")
let zagl = document.createElement("h1")
let text = document.createTextNode("манга")
zagl.appendChild(text)
let picture = document.createElement("img")
picture.src = "img/2869449.jpg"
picture.style.width = "350px"
let price = document.createElement("p")
let cena = document.createTextNode("893 рублей")
price.appendChild(cena)
let one_li = document.querySelectorAll(".gds_li")[0]
const btn = document.createElement("button")
const text_btn = document.createTextNode("shoot")
btn.appendChild(text_btn)
btn.setAttribute("onclick", "shoot()")
function product() {
    console.log("test")
    list.appendChild(gds)
    gds.appendChild(zagl)
    gds.appendChild(picture)
    gds.appendChild(price)
    gds.appendChild(btn)
    one_li.classList.add("ubrat")
}
function shoot() {
    btn.parentNode.remove()
    firstLi.classList.remove("ubrat")
}