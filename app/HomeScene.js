import React from 'react-native'
import FirstTouchScene from './FirstTouchScene'
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React

class HomeScene extends Component {
  constructor(props) {
    super(props)
    //Be sure to add this line, or the "this" in _onPress method will not reference to current object
    this._onPress = this._onPress.bind(this)
  }
  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
        <TouchableHighlight onPress={this._onPress}>
          <Text>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
      </View>
    )
  }
  _onPress() {
    this.props.navigator.push({
      title: 'First touch scene',
      component: FirstTouchScene,
      passProps: {showLable: "First touch"}
    })
  }
}

const styles = StyleSheet.create({
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  }
})

module.exports = HomeScene
