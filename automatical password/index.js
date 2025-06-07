const passwordBox = document.querySelector('#password')
const generateButton = document.querySelector('.generate')
const copy = document.querySelector('#copy')

const lenght = 12
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '@#$%^&*()_+~|}{[]<>/-=?\\'

const allChars = upperCase + lowerCase + number + symbol

function createPass(){
    let pass = ''
    pass += upperCase[Math.floor(Math.random() * upperCase.length)]
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    pass += number[Math.floor(Math.random() * number.length)]
    pass += symbol[Math.floor(Math.random() * symbol.length)]

    while(lenght > pass.length){
        pass += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = pass
}

function copyPass(){
    passwordBox.select()
    navigator.clipboard.writeText(passwordBox.value)
}

copy.addEventListener('click', copyPass)
generateButton.addEventListener('click', createPass)