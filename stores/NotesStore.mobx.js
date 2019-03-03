import { observable, action } from 'mobx'
import moment from 'moment'
import uuid from 'uuid-js'

class NotesStore {
  @observable notes = []

  @action createNote () {
    let note = new Note(this)
    this.notes.push(note)
    return note
  }

  @action deleteNote (note: Note) {
    this.notes.splice(this.notes.indexOf(note), 1)
  }
}

const singleton = new NotesStore()
export default singleton

export class Note {
  constructor (store) {
    this.store = store
    this.id = uuid.create().toString()
    this.created = moment().format('X')
  }

  // Immutable values
  store = null
  id = null
  created = null

  @observable color = ''
  @observable text = ''

  @action updateColor (newValue: string) { this.color = newValue }
  @action updateText (newValue: string) { this.text = newValue }

  delete () {
    this.store.deleteNote(this)
  }
}
