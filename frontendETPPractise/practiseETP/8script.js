const buttons = document.querySelectorAll(".toggleBtn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const details = button.nextElementSibling;

        if (details.style.display === "block") {

            details.style.display = "none";
            button.textContent = "View Details";

        }
        else {

            details.style.display = "block";
            button.textContent = "Hide Details";

        }

    });

});