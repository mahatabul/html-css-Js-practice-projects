let popup = document.getElementById("popup");
let body = document.body;

function clickfunc() {
  popup.classList.add("show");
  body.style.backgroundColor = "rgba(0, 0, 0, 0.586)";
}

function ok() {
  popup.classList.remove("show");
  body.style.backgroundColor = "white";
}
