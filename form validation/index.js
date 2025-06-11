const name = document.getElementById('name')
const number = document.getElementById('no')
const email = document.getElementById('email')
const messege = document.getElementById('msg')
const submit = document.getElementById('btn')

const nameError = document.getElementById('name-error')
const numberError = document.getElementById('no-error')
const emailError = document.getElementById('email-error')
const messegeError = document.getElementById('msg-error')
const submitError = document.getElementById('submit-error')

let validateName = () => {
    submitError.innerText = ''
    let input = name.value
    if(input.length === 0){
        nameError.innerText = "Name is required"
        return false;
    }
    if(!input.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerText = "Write your full name"
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-check" style="color:green; font-size: 18px;"></i>`
    return true;
}
let validateNumber = () => {
    submitError.innerText = ''
    let input = number.value
    
    if(input.length === 0){
        numberError.innerText = "Number is required"
        return false
    }
    if(input.length !== 10){
        numberError.innerText = "Number must be 10 digits"
        return false;
    }
    if(!input.match(/^[0-9]{10}$/)){
        numberError.innerHTML = 'Number is 0-9'
        return false;
    }
   
    numberError.innerHTML = `<i class="fa-solid fa-check" style="color:green; font-size: 18px;"></i>`
    return true;
}
let validateEmail = () => {
    submitError.innerText = ''
    let input = email.value
    
    if(input.length === 0){
        emailError.innerText = "Email is required"
        return false
    }
    if(!input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerText = "Email invalid"
        return false;
    }
   
    emailError.innerHTML = `<i class="fa-solid fa-check" style="color:green; font-size: 18px;"></i>`
    return true;
}
let validateMsg = () => {
    submitError.innerText = ''
    let input = messege.value
    
    if(input.length < 30){
        messegeError.innerText = `${30 - input.length} more characters required`
        return false
    }
   
    messegeError.innerHTML = `<i class="fa-solid fa-check" style="color:green; font-size: 18px;"></i>`
    return true;
}

name.onkeyup = validateName
number.onkeyup = validateNumber
email.onkeyup = validateEmail
messege.onkeyup = validateMsg

submit.onclick = (e) => {
    e.preventDefault()
    if(!validateName() || !validateNumber() || !validateEmail() || !validateMsg()){
        submitError.innerText = 'Please fix errors'
        return false
    }
    submitError.style.color = 'green'
    submitError.innerText = 'Submit successfully'
}
