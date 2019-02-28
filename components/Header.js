import React from 'react'
import { View, StyleSheet } from 'react-native'
import Title from './Title'
import Layout from '../constants/Layout'

export default class Header extends React.Component {
  render () {
    return <View style={styles.container}>
      <Title>{this.props.title}</Title>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#B3E5FC',
    borderBottomWidth: 2,
    width: Layout.window.wp(100)
  }
})
