import { observable, action } from 'mobx'
import { create, persist } from 'mobx-persist'
import { AsyncStorage } from 'react-native'
import moment from 'moment'
import uuid from 'uuid-js'

export class Note {
  constructor (store) {
    this.store = store
    this.id = uuid.create().toString()
    this.created = moment().format('X')
  }

  // Immutable values
  store = null
  @persist id = null
  @persist created = null

  @persist @observable color = ''
  @persist @observable text = ''

  @action updateColor (newValue: string) { this.color = newValue }
  @action updateText (newValue: string) { this.text = newValue }

  delete () {
    this.store.deleteNote(this)
  }
}

class NotesStore {
  @persist('list', Note) @observable notes = []

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

const hydrate = create({
  storage: AsyncStorage, // Choose our storage medium, ensure it's imported above
  jsonify: true // if you use AsyncStorage, this needs to be true
})

// We hydrate anything we've persisted so that it is updated into the state on creation
hydrate('persistedState', singleton).then((data) => {
  console.log('Hydrated persisted data ', data)
})
