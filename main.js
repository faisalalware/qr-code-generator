const input = document.getElementById("qr-input");
const button = document.getElementById("qr-btn");
const image = document.getElementById("qr-image");

const urlPattern = new RegExp('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?');

button.addEventListener('click', function () {
    const inputValue = input.value;

    if (!inputValue) {
        alert("Please enter URL");
        return;
    }
    else {
        image.setAttribute("style", "display: block")
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    }
});

