import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native'
import { Constants } from 'expo'
import Header from './components/Header'
import NotesList from './components/NotesList'
import ActionButton from 'react-native-action-button'
import Modal from 'react-native-modal'

export default class App extends React.Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  addNote = () => {
    this.setModalVisible(true)
    console.log('add note')
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          backdropColor='#000'
          backdropOpacity={0.2}
          animationIn='zoomInDown'
          animationOut='zoomOutUp'
          isVisible={this.state.modalVisible}
        >
          <View style={{ flex: 1, backgroundColor: '#fff', borderColor: '#B3E5FC', borderWidth: 2, borderRadius: 5 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
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
