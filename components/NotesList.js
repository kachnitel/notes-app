import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Note from './Note'
import Layout from '../constants/Layout'
import { observer, inject } from 'mobx-react'

export default
@inject('NotesStore')
@observer
class NotesList extends React.Component {
  render () {
    let notes = this.props.NotesStore.notes.map((note) => {
      return <Note backgroundColor={note.color} key={note.id}>{note.text}</Note>
    })

    return <ScrollView contentContainerStyle={styles.container}>
      {notes}
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Layout.window.hp(1.5)
  }
})
