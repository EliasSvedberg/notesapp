class Note {
  constructor() {
    this.createNote()
  }

  createNote() {
    this.note = document.createElement('div')
    this.note.className = 'note'
    this.noteheader = document.createElement('div')
    this.noteheader.className = 'noteheader'
    this.headerclose = document.createElement('span')
    this.headerclose.className = 'closenote'
    this.headercloseIcon = document.createElement('i')
    this.headercloseIcon.className = 'fas fa-times-circle'
    this.notetitle = document.createElement('div')
    this.notetitle.className = 'notetitle'
    this.notetitle.innerHTML = 'note title'
    this.notetitle.contentEditable = 'true'
    this.notebody = document.createElement('div')
    this.notebody.className = 'notebody'
    this.notebody.innerHTML = 'note content'
    this.notebody.contentEditable = 'true'

    this.headercloseIcon.addEventListener('click', i => {
      this.note.remove()
    })

  }

}


class Notes {
  constructor() {
    this.noteDiv = document.querySelector('.notes')
    this.notesArray = []
  }

  addNote(note) {
    this.note = note
    this.notesArray.push(this.note)
  }

  displayNote() {
    this.noteToDisplay = this.notesArray[this.notesArray.length - 1]
    this.noteDiv.appendChild(this.noteToDisplay.note)
    this.noteToDisplay.note.appendChild(this.noteToDisplay.noteheader)
    this.noteToDisplay.noteheader.appendChild(this.noteToDisplay.headerclose)
    this.noteToDisplay.headerclose.appendChild(this.noteToDisplay.headercloseIcon)
    this.noteToDisplay.note.appendChild(this.noteToDisplay.notetitle)
    this.noteToDisplay.note.appendChild(this.noteToDisplay.notebody)
  }

  clearall () {
    while (this.noteDiv.firstChild) {
        this.noteDiv.firstChild.remove()
    }
  }

  removeNote () {
    this.noteDiv.firstChild.remove()
  }
}

const addButton = document.querySelector('.addbutton')
const removeButton = document.querySelector('.closeallbutton')
const removeNote = document.querySelector('.closenote')
const notes = new Notes()

addButton.addEventListener('click', button => {
  const note = new Note()
  notes.addNote(note)
  notes.displayNote()
})


removeButton.addEventListener('click', button => {
  notes.clearall()
})


removeNote.addEventListener('click', span => {
  notes.removeNote()
})
