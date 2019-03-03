import React from 'react'
import { Provider, observer } from 'mobx-react'
import NotesStore from './stores/NotesStore.mobx'
import HomeScreen from './screens/HomeScreen'

export default @observer class App extends React.Component {
  render () {
    return (
      <Provider NotesStore={NotesStore}>
        <HomeScreen />
      </Provider>
    )
  }
}
