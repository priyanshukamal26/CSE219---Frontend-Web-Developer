const button = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

button.addEventListener("click", function () {

    sidebar.classList.toggle("hide");

    if (sidebar.classList.contains("hide")) {
        button.textContent = "Show Sidebar";
        alert("Sidebar is hidden");
    }
    else {
        button.textContent = "Hide Sidebar";
        alert("Sidebar is visible");
    }

});