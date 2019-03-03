import React from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Constants } from 'expo'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import ActionButton from 'react-native-action-button'
import EditNoteModal from '../components/EditNoteModal'

export default class HomeScreen extends React.Component {
  state = {
    modalVisible: false,
    editingNote: null
  }

  setModalVisible (visible: boolean) {
    this.setState({ modalVisible: visible })
  }

  hideModal = () => {
    this.setModalVisible(false)
  }

  addNote = async () => {
    await this.setState({ editingNote: null })
    this.setModalVisible(true)
  }

  componentWillUnmount () {
    this.hideModal()
  }

  editNote = async (note) => {
    await this.setState({ editingNote: note })
    this.setModalVisible(true)
  }

  deleteNote = (note) => {
    Alert.alert(
      'Delete note',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => note.delete()
        }
      ]
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <EditNoteModal
          isVisible={this.state.modalVisible}
          note={this.state.editingNote}
          onDismiss={this.hideModal}
          onSave={this.hideModal}
        />

        <Header title='Notes' />
        <NotesList
          onEditNote={this.editNote}
          onDeleteNote={this.deleteNote}
        />
        <ActionButton
          buttonColor='#0288D1'
          onPress={this.addNote}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight
  }
})
