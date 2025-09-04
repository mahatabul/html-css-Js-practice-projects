let current = 0
let score = 0;
const sc = document.getElementById("score");
const quiz = [
    { ques: "What is Shika?", ansIndex: 2 }, // 0-based index of correct answer
    { ques: "What is ChatGPT?", ansIndex: 6 },
    { ques: "Which planet is known as the Red Planet?", ansIndex: 9 },
    { ques: "What does HTML stand for?", ansIndex: 14 }
];

const divlist = document.querySelectorAll(".ans");
function show(index) {
    divlist.forEach((div, i) => {
        div.classList.toggle("active", i == index);

    });
}
show(current);

function next() {

    if (current < divlist.length - 1) {
        current++;
        show(current);
        if (current == divlist.length - 1) {

            divlist[divlist.length - 1].innerHTML = `You scored ${score} out of 4\nquiz finished`;

        }

    }

    else {
        alert("Quiz finished");
    }

}



const options = document.querySelectorAll(".options");

options.forEach((div, index) => {
    div.addEventListener("click", () => {
        if (quiz[current].ansIndex == index) {
            div.classList.toggle("correct");
            score++;
            sc.innerHTML = `${score}/4`;


        }
        else {
            div.classList.toggle("wrong");
            score--;
            sc.innerHTML = `${score}/4`;
        }
    });
});