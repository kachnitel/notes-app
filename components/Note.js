import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import Layout from '../constants/Layout'
import DateTime from './DateTime'
import Icon from './Icon'
import moment from 'moment'
import { observer } from 'mobx-react'

export default
@observer
class Note extends React.Component {
  render () {
    let formattedDate = moment(this.props.note.created * 1000).format('D.M.YYYY HH:mm')
    // Wrapped in a View for now to keep the BG color just around text
    // But not a Text bgColor to accomodate edit etc..
    return <View>
      <View style={{ ...styles.container, backgroundColor: this.props.note.color }}>
        <Text style={styles.noteText}>{this.props.note.text}</Text>
        <View style={styles.footer}>
          <DateTime color={'#666'}>{formattedDate}</DateTime>
          <View style={styles.footerIcons}>
            <Icon name='square-edit-outline' onPress={() => this.props.onPressEdit(this.props.note)} />
            <Icon name='delete' onPress={() => this.props.onPressDelete(this.props.note)} />
          </View>
        </View>
      </View>
    </View>
  }
}

Note.propTypes = {
  note: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    margin: Layout.window.hp(0.75),
    padding: Layout.window.hp(1.5),
    width: Layout.window.wp(45),
    borderWidth: 1,
    borderColor: '#0002',
    borderRadius: Layout.window.hp(1)
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
