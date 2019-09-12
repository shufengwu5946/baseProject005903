import React from 'react';
import { SafeAreaView } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class QRCode extends React.Component {
  onSuccess = (e) => {
    const { navigation } = this.props;
    console.log(e.data);
    navigation.goBack();
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <QRCodeScanner onRead={this.onSuccess} showMarker />
        </SafeAreaView>
      </>
    );
  }
}

export default QRCode;
