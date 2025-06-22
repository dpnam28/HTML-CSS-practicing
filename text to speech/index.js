let speech = new SpeechSynthesisUtterance();

const button = document.querySelector('.container button')
const text = document.querySelector('.text')
const selectVoice = document.getElementById('select')
let voices = []

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]

    voices.forEach((voice, index)=>{
        selectVoice.options[index] = new Option(voice.name, index)
    })

    console.log(voices)
}

selectVoice.onchange = () => {
    speech.voice = voices[selectVoice.value]
}

button.onclick = () => {
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
}