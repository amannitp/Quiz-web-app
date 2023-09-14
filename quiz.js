const quizQuestions = [
    {
      question: "Which is largest animal in the world",
      answers: [
        {
          text: "shark",
          correct: false,
        },
        {
          text: "Blue whale",
          correct: true,
        },
        {
          text: "Elephant",
          correct:false,
        },
        {
          text: "Giraffe",
          correct: false,
        },
      ],
    },
    {
      question: "Which is smallest continent in the world",
      answers: [
        {
          text: "Asia",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "Arctic",
          correct:false,
        },
        {
          text: "Africa",
          correct: false,
        },
      ],
    },
    {
      question: "Which is largest desert in the world",
      answers: [
        {
          text: "kalahari",
          correct: false,
        },
        {
          text: "Gobi",
          correct: false,
        },
        {
          text: "Sahara",
          correct:true,
        },
        {
          text: "Antarctica",
          correct: false,
        },
      ],
    },
  ];
  const questionElement = document.getElementById("question");
  const ansButton = document.querySelector("#ans-buttons");
  const nextQuestion = document.querySelector("#next-btn");

  let currentQuestionIndex=0;
  let score =0;

  function startQuiz(){
    console.log(" quiz start")
    currentQuestionIndex=0;
    score=0;
    nextQuestion.innerHTML="Next"
    showQuestion();

  }
  function showQuestion(){
  resetState()

    let currentQuestion=quizQuestions[currentQuestionIndex]
    questionElement.innerHTML=currentQuestion.question;
    let questionNo=currentQuestionIndex+1;
    currentQuestion.answers.forEach((answer)=>{
        const button=document.createElement('button')
        button.innerHTML=answer.text
        button.classList.add('btn')
        ansButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)

    })
  }

  function selectAnswer(e){
    const selectedBtn=e.target
    const isCorrect=selectedBtn.dataset.correct==='true'
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }

    Array.from(ansButton.children).forEach(button=>{

        if(button.dataset.correct==='true'){
            button.classList.add('correct')

        }
        button.disabled=true;
    });
    nextQuestion.style.display='block';

  }

  function resetState(){
    nextQuestion.style.display='none'
    while(ansButton.firstChild){
        ansButton.removeChild(ansButton.firstChild)

    }
    

  }

  function showScore(){
    resetState()
    questionElement.innerHTML=`You Scored ${score} out of ${quizQuestions.length} !`
    nextQuestion.innerHTML="Play Again"
    nextQuestion.style.display='block'

  }
  function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex<quizQuestions.length){
        showQuestion()
     }else{
        showScore()
     }
  }
  nextQuestion.addEventListener('click',function(){

    if(currentQuestionIndex<quizQuestions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
  })

 
  startQuiz();
