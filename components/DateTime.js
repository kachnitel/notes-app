import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Layout from '../constants/Layout'

export default class DateTime extends React.Component {
  render () {
    return <Text {...this.props} style={{ ...styles.text, color: this.props.color }}>{this.props.children}</Text>
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: Layout.window.hp(2)
  }
})
