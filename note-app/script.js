const notes = document.getElementById("notelist");

function addNote() {
    // Check if notelist exists
    if (!notes) {
        console.error("Element with ID 'notelist' not found");
        return;
    }

    const note = document.createElement("div");
    note.className = "note";

    const p = document.createElement("p");
    p.className = "note-content";
    p.contentEditable = true;
    p.innerHTML = "Add your note";

    const span = document.createElement("span");
    span.setAttribute('contenteditable', 'false'); 
    span.className = "delet";
    span.addEventListener("click", () => {
        note.remove();
    });


    const img = document.createElement("img");
    img.src = "images/delete.png";
    img.alt = "Delete note";
    span.appendChild(img);
    note.appendChild(p);
    note.appendChild(span);
    notes.appendChild(note);
    console.log("Added note");
}