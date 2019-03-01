import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Note from './Note'
import Layout from '../constants/Layout'

export default class NotesList extends React.Component {
  render () {
    return <ScrollView
      contentContainerStyle={styles.container}
    >
      <Note backgroundColor={'#B3E5FC'}>Lorem ipsum I can't really speak latin</Note>
      <Note backgroundColor={'#FFCDD2'}>Maybe I should learn latin?</Note>
      <Note backgroundColor={'#FFECB3'}>Then I could write really fancy notes and bookwords like a smart person. I'd like to be a smart person!</Note>
      <Note backgroundColor={'#CFD8DC'}>How about gray?</Note>
      <Note>Should white have some border? I really need some more time to work on my design.</Note>
      <Note backgroundColor={'#B3E5FC'}>Lorem ipsum I can't really speak latin</Note>
      <Note backgroundColor={'#FFCDD2'}>Maybe I should learn latin?</Note>
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Layout.window.hp(1.5)
  }
})