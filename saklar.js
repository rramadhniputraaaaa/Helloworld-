function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    let gifContainer = document.getElementById("gifContainer");   // untuk lampu2
    let gifContainer3 = document.getElementById("gifContainer3"); // untuk lampu3

    // Lampu 1
    if (toggle1.checked) {
        lampu1.src = "on.gif";
    } else {
        lampu1.src = "off.gif";
    }

    // Lampu 2
    if (toggle2.checked) {
        lampu2.src = "tenor.gif";
        gifContainer.style.display = "block";
    } else {
        lampu2.src = "wkwk.jpg";
        gifContainer.style.display = "none";
    }

    // Lampu 3 (FIX → pakai toggle3, bukan toggle2)
    if (toggle3.checked) {
        lampu3.src = "tenor 2.gif";
        gifContainer3.style.display = "block";
    } else {
        lampu3.src = "sendy.jpg";
        gifContainer3.style.display = "none";
    }
}
