function toggleView() {
    const btn = document.getElementById("output");
    if(btn.style.display === "block") btn.style.display = "none";
    else btn.style.display = "block";
}

function changeText() {
    const ele = document.getElementById("output");
    ele.innerText = 'Hello to my biploarity!';
    ele.style.color = "blue";
    ele.style.fontSize = "50px";
    alert("Text changed!")
    // ele.
}

function resetChanges() {
    const ele = document.getElementById("output");
    ele.style.display = "block";
    ele.innerText = "Hello!";
    alert("Resett-ed!");
}

function toggleSidebar() {
    const ele = document.getElementById("sidebar");
    const text = document.getElementById("toggleSidebar");

    if(ele.style.display === "none") {
        ele.style.display = "block";
        text.innerText = "Hide Sidebar"
        alert("Sidebar is visible.");
    }
    else {
        ele.style.display = "none";
        alert("Sidebar is hidden.");
        text.textContent = "Show Sidebar";
    }
}