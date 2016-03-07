import React from 'react-native'
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} = React

class SecondTouchScene extends Component {
  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
          <Text style={styles.transformProps}>Transform props: {this.props.showLable}</Text>
          <Text>You have touch the "TouchableHighlight" to come here.</Text>
      </View>
    )
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

module.exports = SecondTouchScene
