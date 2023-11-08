// Get elements from document
const input = document.getElementById("qr-input");
const size = document.getElementById("qr-sizes");
const generateButton = document.getElementById("generate-btn");
const container = document.getElementById("qr-body");
const downloadButton = document.getElementById("download-btn");

// Click event listener on generate button
generateButton.addEventListener('click', (e) => {
    e.preventDefault();
    generateQRCode();
})

// Click event listener on download button
downloadButton.addEventListener('click', () => {
    downloadQRCode();
})

// Function to generate QR code
function generateQRCode() {
    if (!input.value) {
        alert("Please enter URL");
        return;
    }
    else if (!size.value) {
        alert("Please select size");
        return;
    }
    else {
        container.innerHTML = "";
        new QRCode(container, {
            text: input.value,
            width: size.value,
            height: size.value,
            colorDark: "#000000",
            colorLight: "#ffffff",
        });
        generateButton.setAttribute('style', 'margin-bottom: 30px');
        container.setAttribute('style', 'display: block');
        downloadButton.setAttribute('style', 'display: block');
    }
}

// Function to download QR Code
function downloadQRCode() {
    let img = document.querySelector('.qr-body img');

    if (img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadButton.setAttribute("href", imgAtrr);
    }
    else {
        downloadButton.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
}


