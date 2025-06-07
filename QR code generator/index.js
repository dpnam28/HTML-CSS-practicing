const api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
const input = document.getElementById('input')
const button = document.getElementById('btn')
const imgBox = document.getElementById('imgBox')
const qrImg = document.querySelector('#imgBox img')

button.onclick = () =>{
    if(input.value.trim() === ''){
        input.classList.add('error')
        setTimeout(() => {
            input.classList.remove('error')
        }, 1000);
        return
    }

    qrImg.id = 'qrImg'
    qrImg.src = api + input.value.trim()
    imgBox.classList.add('show-img')
}
