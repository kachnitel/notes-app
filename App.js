import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import Header from './components/Header'
import NotesList from './components/NotesList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title='Notes' />
        <NotesList />
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
