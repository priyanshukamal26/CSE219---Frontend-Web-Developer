type Message = {
    text: string;
};

const button = document.getElementById("loadBtn") as HTMLButtonElement;
const loading = document.getElementById("loading") as HTMLParagraphElement;
const messageList = document.getElementById("messageList") as HTMLUListElement;

function fetchMessages(): Promise<Message[]> {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                { text: "Hello" },
                { text: "Welcome" },
                { text: "TypeScript Promise Example" }
            ]);

        }, 2000);

    });

}

button.addEventListener("click", () => {

    loading.textContent = "Loading messages...";

    fetchMessages().then((messages) => {

        loading.textContent = "";

        messages.forEach((message) => {

            const li = document.createElement("li");

            li.textContent = message.text;

            messageList.appendChild(li);

        });

    });

});