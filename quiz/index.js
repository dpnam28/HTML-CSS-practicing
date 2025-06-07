import questions from "./question.js";

let len = questions.length
const questionElement = document.querySelector('.quiz__question')
const submit = document.querySelector('.submit')
const quizButton = document.querySelector('.quiz__btn')

let score = 0

;(function Quiz(){
    submit.innerHTML = 'Next'
    nextQuiz()
})()

function nextQuiz(){
    resetQuiz()
    let quizIndex = Math.floor(Math.random()*questions.length)
    let question = questions[quizIndex]
    questionElement.innerHTML = question.question

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnwser)
        quizButton.appendChild(button)
    });
    
    questions.splice(quizIndex, 1)
}

function resetQuiz(){
    while(quizButton.firstChild){
        quizButton.removeChild(quizButton.firstChild)
    }
}

function selectAnwser(e){
    const selected = e.target
    const isCorrect = selected.dataset.correct === 'true'
    if(isCorrect){
        selected.classList.add('correct')
        score++
    }
    else{
        selected.classList.add('incorrect')
    }
    Array.from(quizButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = true
    })

}

submit.addEventListener('click', (e)=>{
    if(questions.length === 0){
        showScore()
    }
    else{
        nextQuiz()
    }
})

function showScore(){
    resetQuiz()
    submit.outerHTML = ''

    questionElement.innerHTML = `Your total score is ${score} out of ${len} (F5 to play again!!!)`
}
