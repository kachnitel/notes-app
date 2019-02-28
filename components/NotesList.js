import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Note from './Note'
import Layout from '../constants/Layout'

export default class NotesList extends React.Component {
  render () {
    return <ScrollView
      contentContainerStyle={styles.container}
    >
      <Note />
      <Note />
      <Note />
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Layout.window.hp(2),
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start'
  }
})