import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Layout from '../constants/Layout'

export default class Title extends React.Component {
  render () {
    return <Text {...this.props} style={styles.title}>{this.props.children}</Text>
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: Layout.window.hp(5)
  }
})
