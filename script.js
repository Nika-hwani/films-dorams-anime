let checkbox = document.querySelector("#switch");
let body = document.querySelector("body");

const setDarkMode = () => {
    body.dataset.scene = "dark";
    checkbox.checked = false;
}

const setLightMode = () => {
    body.dataset.scene = "light";
    checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
    checkbox.checked ? setLightMode() : setDarkMode();
});



let basket = JSON.parse(localStorage.getItem("basket")) || []
function saveBasket(){
    localStorage.setItem("basket", JSON.stringify(basket))
}

function updateBasketCounts(){
    let basketlink = document.querySelector('a[href="busket.html"]')
    if (basketlist){
        let count = basketlink.querySelector('.basket-count')

        if(!count){
            count = document.createElement("span")
            count.classList.add("basket-count")
            basketlink.appendChild(count)
        }
        count.textContent = basket.length
    }
}

let cards = document.querySelector('.card')
cards.forEach(card => {
    let name = card.querySelector('.name')
    let image = card.querySelector('.films')
    let genre = card.querySelector('.genre')

    if (name && image){
        let button = document.createElement("button")
        button.textContent = "REMIND"
        card.appendChild(button)

        button.addEventListener('click', function(){
            let film = {
                nama: name.textContent,
                image: image.src,
                ge:genre ? genre.textContent :""
            }
        })
    }
})