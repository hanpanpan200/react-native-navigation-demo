import React from 'react-native'
import SecondTouchScene from './SecondTouchScene'
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React

class FirstTouchScene extends Component {
  constructor(props) {
    super(props)

    this._onPress = this._onPress.bind(this)
  }
  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
        <Text style={styles.transformProps}>Transform props: {this.props.showLable}</Text>
        <TouchableHighlight onPress={this._onPress}>
          <Text>Touch me to navigate to second touch scene. I will transform "Second touch" to it.</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _onPress() {
    this.props.navigator.push({
      title: "Second Touch Scene",
      component: SecondTouchScene,
      passProps: {showLable: "Second touch"}
    })
  }
}
const styles = StyleSheet.create({
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  },
  transformProps: {
    marginBottom: 10,
  }
})

module.exports = FirstTouchScene
