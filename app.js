
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

function colorWhite(event) {
    event.target.style.setProperty('background-color', "#000000");
}

function colorBlack(event) {
    event.target.style.setProperty('background-color', "#ffffff");
}

function buttonFunction() {
    let number = prompt("Please enter number", 16);
    if (number != null && number < 100) {
        createDivs(number)
    }
}

function createDivs(number) {

    if (document.getElementById('container'))
        document.getElementById('container').remove();

    const containerElement = document.createElement("div")
    containerElement.setAttribute('id', 'container');
    containerElement.style.setProperty('display', 'grid');
    containerElement.style.setProperty('grid-template-rows', 'repeat(var(--grid-rows), 1fr')
    containerElement.style.setProperty('grid-template-columns', 'repeat(var(--grid-cols), 1fr')
    containerElement.style.setProperty('--grid-rows', number);
    containerElement.style.setProperty('--grid-cols', number);

    Array(number * number).fill(0).forEach((item) => {
        Array(number).fill(0).forEach((_item) => {

            let divCreated = document.createElement('div');

            divCreated.addEventListener('mouseover', colorWhite);
            divCreated.addEventListener('mouseleave', colorBlack);

            containerElement.appendChild(divCreated);
        })
    })
    document.body.appendChild(containerElement)

}



document.addEventListener('DOMContentLoaded', function () {

    createDivs(16)
    document.querySelector('button').addEventListener('click', buttonFunction)
}, false);






