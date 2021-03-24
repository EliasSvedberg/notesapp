class Note {
  constructor() {
    this.createNote()
  }

  createNote() {
    this.note = document.createElement('div')
    this.note.className = 'note'
    this.noteheader = document.createElement('div')
    this.noteheader.className = 'noteheader'
    this.notetitle = document.createElement('div')
    this.notetitle.className = 'notetitle'
    this.notebody = document.createElement('div')
    this.notebody.className = 'notebody'
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
    console.log(this.noteToDisplay)
    this.noteDiv.appendChild(this.noteToDisplay.note)
    this.noteToDisplay.note.appendChild(this.noteToDisplay.noteheader)
    this.noteToDisplay.note.appendChild(this.noteToDisplay.notetitle)
    this.noteToDisplay.note.appendChild(this.noteToDisplay.notebody)


    // <div class="note">
    //   <div class="noteheader"></div>
    //   <div class="notetitle" contenteditable="true"> title </div>
    //   <div class="notebody" contenteditable="true"> note 1 </div>
    // </div>

  }
}

const addButton = document.querySelector('.addbutton')
const notes = new Notes()

addButton.addEventListener('click', button => {
  const note = new Note()
  notes.addNote(note)
  notes.displayNote()
})
