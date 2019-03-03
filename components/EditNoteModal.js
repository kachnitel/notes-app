import React from 'react'
import Modal from 'react-native-modal'
import EditNote from './EditNote'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

export default
@observer
class EditNoteModal extends React.Component {
  render () {
    return (
      <Modal
        backdropColor='#000'
        backdropOpacity={0.75}
        animationIn='zoomInDown'
        animationOut='zoomOutUp'
        isVisible={this.props.isVisible}
        onBackdropPress={this.props.onDismiss}
        onBackButtonPress={this.props.onDismiss}
      >
        <EditNote
          onDismiss={this.props.onDismiss}
          note={this.props.note}
          onSave={this.props.onSave}
        />
      </Modal>
    )
  }
}

EditNoteModal.propTypes = {
  isVisible: PropTypes.bool,
  note: PropTypes.any,
  onSave: PropTypes.func,
  onDismiss: PropTypes.func
}
