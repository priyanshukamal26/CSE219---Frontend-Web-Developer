type ButtonData = {
    text: string;
};

const buttons: ButtonData[] = [
    { text: "Button 1" },
    { text: "Button 2" },
    { text: "Button 3" }
];

const container = document.getElementById("container") as HTMLDivElement;

buttons.forEach((buttonData) => {

    const button = document.createElement("button");

    button.textContent = buttonData.text;

    container.appendChild(button);

});

container.addEventListener("click", (event) => {

    const target = event.target as HTMLButtonElement;

    if (target.tagName === "BUTTON") {
        alert(target.textContent);
    }

});