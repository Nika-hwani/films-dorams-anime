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