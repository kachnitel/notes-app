import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import Layout from '../constants/Layout'
import Icon from '@expo/vector-icons/MaterialIcons'

export default class ColorPicker extends React.Component {
  render () {
    let options = [
      {
        value: '#FFCDD2',
        label: 'Red'
      },
      {
        value: '#90CAF9',
        label: 'Blue'
      },
      {
        value: '#A5D6A7',
        label: 'Green'
      },
      {
        value: '#FFF59D',
        label: 'Yellow'
      },
      {
        value: '#CFD8DC',
        label: 'Blue gray'
      }
    ]

    return (
      <CustomPicker
        placeholder={'Pick a color'}
        options={options}
        getLabel={item => item.label}
        fieldTemplate={this.renderField}
        optionTemplate={this.renderOption}
        headerTemplate={this.renderHeader}
        footerTemplate={this.renderFooter}
        modalStyle={styles.modal}
        onValueChange={this.props.onValueChange}
      />
    )
  }

  renderFooter (action) {
    return (
      <TouchableOpacity
        style={styles.footerContainer}
        onPress={() => action.close()}
      >
        <Text>Cancel</Text>
      </TouchableOpacity>
    )
  }

  renderField ({ selectedItem, defaultText, getLabel, clear }) {
    return (
      <View style={styles.container}>
        {!selectedItem && <Text style={styles.text}>{defaultText}</Text>}
        {selectedItem && (
          <>
            <TouchableOpacity onPress={clear}>
              <Icon
                name='clear'
                size={Layout.window.hp(2.5)}
                style={styles.clearIcon}
              />
            </TouchableOpacity>
            <Text style={styles.text}>
              {getLabel(selectedItem)}
            </Text>
          </>
        )}
      </View>
    )
  }

  renderOption ({ item, getLabel }) {
    return (
      <View style={styles.optionContainer}>
        <View style={{ ...styles.box, backgroundColor: item.value }} />
        <Text style={{ alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Layout.window.wp(30),
    borderColor: '#0003',
    borderWidth: 1,
    borderRadius: Layout.window.hp(2),
    height: Layout.window.hp(5),
    alignItems: 'center'
  },
  text: {
    fontSize: Layout.window.hp(2.5),
    paddingLeft: Layout.window.wp(1)
  },
  footerContainer: {
    padding: Layout.window.hp(1),
    alignItems: 'center'
  },
  optionContainer: {
    flexDirection: 'row',
    padding: Layout.window.hp(1.5),
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  box: {
    width: Layout.window.hp(4),
    height: Layout.window.hp(4),
    marginRight: Layout.window.wp(3),
    borderRadius: Layout.window.hp(1)
  },
  modal: {
    width: Layout.window.wp(50),
    alignSelf: 'center'
  },
  clearIcon: {
    padding: Layout.window.hp(0.5),
    margin: Layout.window.hp(0.5),
    color: '#fffb',
    backgroundColor: '#0006',
    borderRadius: Layout.window.hp(2.5)
  }
})
