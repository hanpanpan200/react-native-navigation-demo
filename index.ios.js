import React from 'react-native'
import HomeScene from './app/HomeScene'
import FirstRightScene from './app/FirstRightScene'
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React

class NavigationDemo extends Component {
  constructor(props) {
    super(props)
    //Be sure to add this line in the constructor, or the "this" in method _onRightButtonPress will reference to the object itself.
    this._onRightButtonPress = this._onRightButtonPress.bind(this)
  }
  render() {
    return (
      <NavigatorIOS ref="nav"
        style = {styles.container}
        initialRoute= {{
          component: HomeScene,
          title: "Navigation demo",
          rightButtonTitle: "Right Scene",
          onRightButtonPress: this._onRightButtonPress
        }}/>
    )
  }

  _onRightButtonPress() {
    this.refs.nav.push({
      title: "From Right",
      component: FirstRightScene
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  }
})

AppRegistry.registerComponent('NavigationDemo', () => NavigationDemo);
