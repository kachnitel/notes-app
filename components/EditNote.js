import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Layout from '../constants/Layout'

export default class EditNote extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Edit note</Text>
        </View>
        <TextInput
          style={styles.textInput}
        />
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={this.props.onDismiss}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: Layout.window.hp(50),
    backgroundColor: '#fff',
    borderColor: '#B3E5FC',
    borderWidth: 2,
    borderRadius: 5
  },
  header: {
    flexDirection: 'row'
  },
  footer: {
    flexDirection: 'row'
  },
  textInput: {
    flex: 1
  }
})