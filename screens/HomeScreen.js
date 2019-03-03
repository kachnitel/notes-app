import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Constants } from 'expo'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import ActionButton from 'react-native-action-button'
import Modal from 'react-native-modal'
import EditNote from '../components/EditNote'
import { observer, inject } from 'mobx-react'

export default
@inject('NotesStore')
@observer
class HomeScreen extends React.Component {
  state = {
    modalVisible: false,
    activeNote: null
  }

  setModalVisible (visible: boolean) {
    this.setState({ modalVisible: visible })
  }

  hideModal = () => {
    this.setModalVisible(false)
    this.setState({ activeNote: null })
  }

  addNote = () => {
    let note = this.props.NotesStore.createNote()
    this.setState({ activeNote: note })
    this.setModalVisible(true)
  }

  componentWillUnmount () {
    this.hideModal()
  }

  render () {
    return (
      <View style={styles.container}>
        <Modal
          backdropColor='#000'
          backdropOpacity={0.75}
          animationIn='zoomInDown'
          animationOut='zoomOutUp'
          isVisible={this.state.modalVisible}
          onBackdropPress={this.hideModal}
          onBackButtonPress={this.hideModal}
        >
          <EditNote
            onDismiss={this.hideModal}
            note={this.state.activeNote}
          />
        </Modal>

        <Header title='Notes' />
        <NotesList />
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
