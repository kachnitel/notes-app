import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Layout from '../constants/Layout'

export default class Note extends React.Component {
  render () {
    return <View style={styles.container}>
      <Text style={styles.noteText}>Asdf</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B3E5FC',
    margin: Layout.window.hp(0.75),
    padding: Layout.window.hp(1.5),
  },
  noteText: {
    fontSize: Layout.window.hp(3)
  }
})
