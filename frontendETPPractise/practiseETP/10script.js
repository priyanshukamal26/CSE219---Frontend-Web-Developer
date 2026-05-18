const button = document.getElementById("clickBtn");
const countText = document.getElementById("count");

function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}

const counter = createCounter();

button.addEventListener("click", function () {

    countText.textContent = counter();

});