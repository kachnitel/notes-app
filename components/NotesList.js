import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Note from './Note'
import Layout from '../constants/Layout'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

export default
@inject('NotesStore')
@observer
class NotesList extends React.Component {
  render () {
    let notes = this.props.NotesStore.notes.map((note) => {
      return <Note
        note={note}
        key={note.id}
        onPressEdit={this.props.onEditNote}
        onPressDelete={this.props.onDeleteNote}
      />
    })

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {notes}
      </ScrollView>
    )
  }
}

NotesList.propTypes = {
  NotesStore: PropTypes.any,
  onDeleteNote: PropTypes.func,
  onEditNote: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Layout.window.hp(1.5)
  }
})
