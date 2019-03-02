import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import Layout from '../constants/Layout'
import DateTime from './DateTime'
import Icon from './Icon'

export default class Note extends React.Component {
  render () {
    // Wrapped in a View for now to keep the BG color just around text
    // Not a Text bgColor to accomodate edit etc..
    return <View>
      <View style={{ ...styles.container, backgroundColor: this.props.backgroundColor }}>
        <Text style={styles.noteText}>{this.props.children}</Text>
        <View style={styles.footer}>
          <DateTime color={'#666'}>28.2.2019 21:45</DateTime>
          <View style={styles.footerIcons}>
            <Icon name='square-edit-outline' />
            <Icon name='delete' />
          </View>
        </View>
      </View>
    </View>
  }
}

Note.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    margin: Layout.window.hp(0.75),
    padding: Layout.window.hp(1.5),
    width: Layout.window.wp(45)
  },
  noteText: {
    fontSize: Layout.window.hp(3)
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerIcons: {
    flexDirection: 'row'
  }
})
