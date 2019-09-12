import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={[styles.scene, styles.bgColor1]} />;

const SecondRoute = () => <View style={[styles.scene, styles.bgColor2]} />;

export default class TabViewExample extends React.Component {
  constructor(props) {
    super(props);
    /* eslint-disable react/no-unused-state */
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
      ],
    };
    /* eslint-enable react/no-unused-state */
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        // eslint-disable-next-line react/no-unused-state
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    height: 200,
  },
  bgColor1: { backgroundColor: '#ff4081' },
  bgColor2: { backgroundColor: '#673ab7' },
});
