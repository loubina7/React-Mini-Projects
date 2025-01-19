const questions=[
    {
        question:"Which is larget animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Africa",correct:false},
            {text:"Europe",correct:false},
        ]
    },
    {
        question:"Which is the larget desert in the world?",
        answers:[
            {text:"kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antraticca",correct:true},
        ]
    },
    {
        question: "Which programming language is primarily used for web development?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "Java", correct: false },
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        answers: [
            { text: "100°C", correct: true },
            { text: "90°C", correct: false },
            { text: "120°C", correct: false },
            { text: "80°C", correct: false },
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-button");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;//1. what is the .. questions[currentQuestionIndex].question
    currentQuestion.answers.forEach(answer =>{//creation de button pour chaque reponse
        const button=document.createElement("button");
        button.innerHTML=answer.text;//le text du bouton est le text de reponse exple Java 
        button.classList.add("btn");//class de css .btn
        answerButtons.appendChild(button);//The button is added to the answerButton container.
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.Disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
} 
function handleNexButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        handleNexButton();
    }else{
        startQuiz();
    }
});

startQuiz();


