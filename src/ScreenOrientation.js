import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Orientation from 'react-native-orientation';

export default class ScreenOrientation extends Component {
  componentWillMount() {
    // The getOrientation method is async. It happens sometimes that
    // you need the orientation at the moment the JS runtime starts running on device.
    // `getInitialOrientation` returns directly because its a constant set at the
    // beginning of the JS runtime.

    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      // do something
      console.log('getInitialOrientation', 'Portrait');
    } else {
      // do something else
      console.log('getInitialOrientation', 'Landscape');
    }
  }

  componentDidMount() {
    // this locks the view to Portrait Mode
    // Orientation.lockToPortrait();

    // this locks the view to Landscape Mode
    // Orientation.lockToLandscape();

    // this unlocks any previous locks to all Orientations
    // Orientation.unlockAllOrientations();

    Orientation.addOrientationListener(this._orientationDidChange);
  }

  componentWillUnmount() {
    Orientation.getOrientation((err, orientation) => {
      if (!err) {
        console.log(err);
        return;
      }
      console.log(`Current Device Orientation: ${orientation}`);
    });

    // Remember to remove listener
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
      console.log('addOrientationListener', 'Landscape');
    } else {
      // do something with portrait layout
      console.log('addOrientationListener', 'Portrait');
    }
  };

  render() {
    // ...

    return (
      <View>
        <Text>Test Orientation</Text>
      </View>
    );
  }
}
