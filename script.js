const quizData = [
  {
    question:'How many times is Bill Cipher shown in the runtime of Gravity Falls?',
    a:"37",
    b:"18",
    c:"21",
    d:"42",
    correct:"a",
  }, {
    question:'What does Stan tell Robbie in episode 17',
    a:"Get off my lawn you skinny jeaned freak",
    b:"How can you wear so much makeup and stll look ugly?",
    c:"Buy Gold",
    d:"You really screwed this one up, kid",
    correct:"c",
  }, {
    question:"Who is Tad Strange",
    a:"Bill Ciphers Brother",
    b:"Time Babys full name",
    c:"Soos future son",
    d:"Just some guy",
    correct:"d",
  }, {
    question:"Where is the Bill Cipher Statue now?",
    a:"Oregon Vortex",
    b:"Confusion Hill",
    c:"Upside Down Town",
    d:"Mummy Town USA",
    correct: "b",
  }, {
    question:"What is Dippers real name?",
    a:"Mason",
    b:"Tyrone",
    c:"Stan the third",
    d:"Dipper is his real name",
    correct:"a",
  }, {
    question:"Do you like me?",
    a:"yes",
    b:"definitely",
    c:"absoulutely",
    d:"I rigged this question",
    correct:"d",
  }, {
    question:"What is the last thing that Bill said in the series?",
    a:"Stanley!",
    b:"A-X-O-L-O-T-L, My time has come to burn, invoke the ancient power that I may return",
    c:"nruter yam i taht rewop tneicna eht ekovni ,nrub ot emoc sah emit ym ,ltoloxa",
    d:"Ill be Watching you",
    correct:"a",
  }, 

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz=0;
let score = 0;

loadQuiz();

function loadQuiz() {
  
  const currentQuizData = quizData[currentQuiz];
  
questionEl.innerHTML =currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
 }

function getSelected(){

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click",() => {
  
  const answer = getSelected();
  
  if (answer){
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
  

  currentQuiz++;
   if(currentQuiz < quizData.length){
      loadQuiz();
   }   else {
        quiz.innerHTML = `<h2> You Scored ${score}/${quizData.length} Questions Correctly </h2>   <button onclick = "location.reload()"> Retry</button>`;
     }
  }
});
   