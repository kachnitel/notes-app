import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Constants } from 'expo'
import Header from './components/Header'
import NotesList from './components/NotesList'
import ActionButton from 'react-native-action-button'
import Modal from 'react-native-modal'
import EditNote from './components/EditNote'

export default class App extends React.Component {
  state = {
    modalVisible: false
  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  hideModal = () => {
    this.setModalVisible(false)
  }

  addNote = () => {
    this.setModalVisible(true)
  }

  componentWillUnmount() {
    this.hideModal()
  }

  render () {
    return (
      <View style={styles.container}>
        <Modal
          backdropColor='#000'
          backdropOpacity={0.2}
          animationIn='zoomInDown'
          animationOut='zoomOutUp'
          isVisible={this.state.modalVisible}
          onBackdropPress={this.hideModal}
          onBackButtonPress={this.hideModal}
        >
          <EditNote
            onDismiss={this.hideModal}
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
  },
})
