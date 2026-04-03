import {getMessage} from "./16message.js"
import {changeColor} from "./16style.js"

window.changeText = function() {
    let element = document.getElementById("title")

    element.innerText = getMessage()
    element.style.color = changeColor()
}