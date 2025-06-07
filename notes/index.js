const createBtn = document.querySelector('.conteiner button')
const notes = document.querySelector('.notes')

;(function showNotes(){
    notes.innerHTML = localStorage.getItem('notes')
})()


function updateStorage(){
    localStorage.setItem('notes', notes.innerHTML)
}

createBtn.addEventListener('click', (e)=>{
    let note = document.createElement('p')
    note.className = 'note__content'
    note.setAttribute('contenteditable', 'true')
    note.setAttribute('spellcheck', 'false')
    note.innerHTML = `<i class="fa-solid fa-trash" contenteditable="false"></i>`

    notes.appendChild(note)
    updateStorage()
})

notes.addEventListener('click', (e)=>{
    if(e.target.tagName === 'I'){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName === 'P'){
        let note = document.querySelector('.note__content')
        note.forEach(note => {
            note.onkeyup = function(){
                updateStorage()
            }
        });
    }
})
