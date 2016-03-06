import React from 'react-native'
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} = React

class FirstRightScene extends Component {
  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
          <Text>You came here from the NavigatorIOS right button.</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  }
})

module.exports = FirstRightScene
