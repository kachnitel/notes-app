import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ToastAndroid,
  Alert,
  Platform
} from 'react-native'
import Layout from '../constants/Layout'
import Title from './Title'
import ColorPicker from './ColorPicker'
import { observer, inject } from 'mobx-react'

export default
@inject('NotesStore')
@observer
class EditNote extends React.Component {
  constructor (props) {
    super(props)

    if (props.note == null) {
      this.state = {
        noteColor: '#fff',
        text: '',
        isNew: true
      }
    } else {
      this.state = {
        noteColor: props.note.color,
        text: props.note.text,
        isNew: false
      }
    }
  }

  updateColor = (value: string) => {
    this.setState({ noteColor: value ? value.value : '#fff' })
  }

  handleTextUpdate = (value: string) => {
    this.setState({ text: value })
  }

  handleSave = () => {
    if (this.state.text === '') {
      let warningMessage = 'Trying to save empty note'
      if (Platform.OS === 'ios') {
        Alert.alert(warningMessage)
      } else {
        ToastAndroid.show(warningMessage, ToastAndroid.SHORT)
      }
      return
    }
    /** @var Note note */
    let note = this.props.note || this.props.NotesStore.createNote()
    note.updateColor(this.state.noteColor)
    note.updateText(this.state.text)
    this.props.onSave()
  }

  render () {
    return (
      <View style={{ ...styles.container, backgroundColor: this.state.noteColor }}>
        <View style={styles.header}>
          <Title>{this.state.isNew ? 'New note' : 'Edit note'}</Title>
        </View>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Let's note something!"
          maxLength={2048}
          placeholderTextColor='#666'
          onChangeText={this.handleTextUpdate}
          autoFocus
          value={this.state.text}
        />
        <View style={styles.footer}>
          <TouchableHighlight onPress={this.props.onDismiss}>
            <Text style={{ ...styles.footerOptionText, color: '#444' }}>
              Cancel
            </Text>
          </TouchableHighlight>
          <ColorPicker
            onValueChange={this.updateColor}
            containerStyle={styles.footerOptionContainer}
            value={this.state.noteColor}
          />
          <TouchableHighlight
            onPress={this.handleSave}
            style={styles.footerOptionContainer}
          >
            <Text style={{
              ...styles.footerOptionText,
              color: this.state.text ? '#000' : '#666'
            }}>
              Save
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: Layout.window.hp(50),
    padding: Layout.window.hp(2),
    backgroundColor: '#fff',
    borderColor: '#0003',
    borderWidth: 1,
    borderRadius: 5
  },
  header: {
    flexDirection: 'row'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  textInput: {
    flex: 1,
    width: '100%',
    fontSize: Layout.window.hp(3),
    textAlignVertical: 'top'
  },
  footerOptionContainer: {
    borderColor: '#0003',
    borderWidth: 1,
    borderRadius: Layout.window.hp(2)
  },
  footerOptionText: {
    fontSize: Layout.window.hp(2.5),
    paddingVertical: Layout.window.hp(0.5),
    paddingHorizontal: Layout.window.wp(1.5)
  }
})
