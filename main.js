// Get elements from document
const input = document.getElementById("qr-input");
const button = document.getElementById("qr-btn");
const image = document.getElementById("qr-image");

// Click event listener on Button
button.addEventListener('click', function () {

    // Get url from input
    const inputValue = input.value;

    // Check if input is empty
    if (!inputValue) {
        alert("Please enter URL");
        return;
    }

    // Generate QR Code
    else {
        image.setAttribute("style", "display: block")
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    }
});

