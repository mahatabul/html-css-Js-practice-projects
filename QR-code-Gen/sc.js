
let input = document.getElementById("iptfd");
let qr = document.getElementById("qr");
qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Addyourtext";
async function generate() {
    let content = input.value;
    if (content=="") {
        alert("Add some text");
        return;
        
    }
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${content}`
    qr.src = api;

}
