const quiz=[
  {
    question:"What is the capital of France?",
    options:["Paris","London","Berlin","Madrid"],
    answer:"Paris"
  },
  {
    question:"What is the largest planet in our solar system?",
    options:["Earth","Mars","Jupiter","Saturn"],
    answer:"Jupiter"
  },
  {
    question:"Who wrote 'To Kill a Mockingbird'?",
    options:["Harper Lee","Mark Twain","Ernest Hemingway","F. Scott Fitzgerald"],
    answer:"Harper Lee"
  }
];

let currentQuestion=0;
let score=0;

function loadQuestion(){
  const questionElement=document.getElementById("question");
  const optionsElement=document.getElementById("options");
  questionElement.textContent=quiz[currentQuestion].question;
  optionsElement.innerHTML="";
  quiz[currentQuestion].options.forEach((option)=>{
    const button=document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.onclick=()=>checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selected){
  if(selected===quiz[currentQuestion].answer){
    score++;
  }
  const buttons=document.querySelectorAll(".option");

  buttons.forEach(button=>button.disabled=true);
};

function nextQuestion(){
  currentQuestion++;
  if(currentQuestion<quiz.length){
    loadQuestion();
  }
  else{
    document.querySelector(".container").innerHTML=
    `<h2>quiz completed!</h2>
    <h3>Your score: ${score}/${quiz.length}</h3>`;
  }
  }
loadQuestion();