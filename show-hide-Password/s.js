const pass = document.getElementById("pass");
const icon = document.getElementById("icon");

icon.addEventListener("click", (e) => {
    if (pass.type == "password") {
        pass.type = "text";
        icon.src = "hidden.png";
    }
    else {
        pass.type = "password";
        icon.src = "show.png";
    }
});