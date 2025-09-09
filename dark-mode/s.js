
const h = document.getElementById("h");
const icon = document.getElementById("icon");

icon.addEventListener("click", (e) => {
    

    if (document.body.classList.contains("darkmode")) {
        icon.src = "moon.png";
        h.textContent = "Light Mode";
        document.body.classList.remove("darkmode");

    }
    else {
        icon.src = "sun.png";
        h.textContent = "Dark Mode";
        document.body.classList.add("darkmode");
    }
})
