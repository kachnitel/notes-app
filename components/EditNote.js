import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Layout from '../constants/Layout'
import Title from './Title'
import ColorPicker from './ColorPicker';

export default class EditNote extends React.Component {
  state = {
    noteColor: '#fff'
  }

  updateColor = (value) => {
    this.setState({ noteColor: value ? value.value : '#fff' })
  }

  render () {
    return (
      <View style={{ ...styles.container, backgroundColor: this.state.noteColor}}>
        <View style={styles.header}>
          {/* TODO: state.note ? Edit note : New note */}
          <Title>Edit note</Title>
        </View>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Let's note something!"
          maxLength={2048}
          placeholderTextColor='#666'
        />
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={this.props.onDismiss}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableHighlight>
          <ColorPicker
            onValueChange={this.updateColor}
          />
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
    borderColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 5
  },
  header: {
    flexDirection: 'row'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  textInput: {
    flex: 1,
    width: '100%',
    fontSize: Layout.window.hp(3),
    textAlignVertical: 'top'
  }
})