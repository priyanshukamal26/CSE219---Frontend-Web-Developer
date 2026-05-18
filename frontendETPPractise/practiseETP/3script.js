const paragraph = document.getElementById("text");

const colorBtn = document.getElementById("colorBtn");
const sizeBtn = document.getElementById("sizeBtn");
const resetBtn = document.getElementById("resetBtn");

let fontSize = 20;

colorBtn.addEventListener("click", function () {

    paragraph.style.color = "red";

    alert("Text color changed");

});

sizeBtn.addEventListener("click", function () {

    fontSize += 5;

    paragraph.style.fontSize = fontSize + "px";

    alert("Font size increased");

});

resetBtn.addEventListener("click", function () {

    paragraph.style.color = "black";

    fontSize = 20;

    paragraph.style.fontSize = "20px";

    alert("Style reset");

});