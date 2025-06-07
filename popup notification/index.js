const btnSubmit = document.querySelector('.button')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')


btnSubmit.onclick = function(){
    popup.classList.add('open-popup')
}

close.onclick = ()=>{
    popup.classList.remove('open-popup')
}