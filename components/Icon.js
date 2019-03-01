import React from 'react'
import { StyleSheet } from 'react-native';
import Layout from '../constants/Layout'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class Icon extends React.Component {
  render () {
    return <MaterialCommunityIcons
      name={this.props.name}
      style={styles.icon}
    />
  }
}

const styles = StyleSheet.create({
  icon: {
    padding: Layout.window.hp(0.5),
    color: '#333',
    fontSize:
    Layout.window.hp(3.5)
  }
})
