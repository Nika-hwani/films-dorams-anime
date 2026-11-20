let checkbox = document.querySelector("#switch");
let body = document.querySelector('body');

const setDarkMode = () => {
    body.classList= 'dark';
    checkbox.checked = true;
}

const settightMode = () => {
    body.classList= 'light';
    checkbox.checked = false;
}

checkbox.addEventListener('click', () => checkbox.checked ? setDarkMode
() : settightMode())