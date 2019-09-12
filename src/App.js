import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  // View,
  Text,
  StatusBar,
  // TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';

// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Video from 'react-native-video';

// import * as Progress from 'react-native-progress';
// import Spacer from 'react-native-spacer';
// import PhoneInput from 'react-native-phone-input';
// import Orientation from 'react-native-orientation';

// import Modal from 'react-native-modal';
// import KeepAwake from 'react-native-keep-awake';
import ImagePicker from 'react-native-image-picker';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import codePush from 'react-native-code-push';
import Config from 'react-native-config';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import TabViewExample from './TabViewExample';
// import SwiperComponent from './SwiperComponent';
// import ScreenOrientation from './ScreenOrientation';

// Icon.loadFont();
// FontAwesome.loadFont();
// AntDesign.loadFont();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible });
  };

  codePushStatusDidChange = (status) => {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for updates.');
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading package.');
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update.');
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log('Up-to-date.');
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed.');
        break;
    }
  };

  codePushDownloadDidProgress = (progress) => {
    console.log(
      `${progress.receivedBytes} of ${progress.totalBytes} received.`
    );
  };

  onButtonPress = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };

  onSuccess = (e) => {
    console.log(e.data);
  };

  render() {
    // const { isModalVisible } = this.state;
    const { navigation } = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <FontAwesome name="rocket" size={30} color="#900" />
            <AntDesign name="info" size={30} color="#900" /> */}

            {/* <Video
              source={{uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}}
              style={styles.backgroundVideo}
            /> */}

            {/* <TabViewExample /> */}
            {/* <SwiperComponent /> */}
            {/* <TextInput style={styles.inputText} /> */}

            {/* <Progress.Bar progress={0.3} width={200} />
            <Progress.Pie progress={0.4} size={50} />
            <Progress.Circle size={30} indeterminate={true} />
            <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}

            {/* <ScreenOrientation /> */}
            {/* <Button title="Show modal" onPress={this.toggleModal} /> */}
            {/* <Modal isVisible={isModalVisible}>
              <View style={styles.modleView}>
                <Text>Hello!</Text>
                <Button title="Hide modal" onPress={this.toggleModal} />
              </View>
            </Modal> */}

            {/* <ActionButton buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item
                buttonColor="#9b59b6"
                title="New Task"
                onPress={() => console.log('notes tapped!')}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="#3498db"
                title="Notifications"
                onPress={() => {}}>
                <Icon
                  name="md-notifications-off"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="#1abc9c"
                title="All Tasks"
                onPress={() => {}}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton> */}
            {/* <KeepAwake /> */}
            <Button
              title="Show ImagePicker"
              onPress={() => {
                ImagePicker.showImagePicker(
                  {
                    title: 'Select Avatar',
                    customButtons: [
                      { name: 'fb', title: 'Choose Photo from Facebook' },
                    ],
                    storageOptions: {
                      skipBackup: true,
                      path: 'images',
                    },
                  },
                  (response) => {
                    console.log('Response = ', response);

                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                      console.log(
                        'User tapped custom button: ',
                        response.customButton
                      );
                    } else {
                      console.log('response.uri', response.uri);
                    }
                  }
                );
              }}
            />
            <Avatar
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
            <QRCode value="hahaha" />
            {/* <QRCodeScanner onRead={this.onSuccess} showMarker /> */}
            <TouchableOpacity onPress={this.onButtonPress}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>update 1.0.10 hahaha</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('qrCode');
              }}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>扫码</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  inputText: { height: 40, borderColor: 'gray', borderWidth: 1 },
  modleView: { flex: 1 },
});

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
  appendReleaseDescription: true,
  descriptionPrefix: '',
  mandatoryContinueButtonLabel: 'Update Now',
  mandatoryUpdateMessage: 'Mandatory Update\n\n',
  optionalIgnoreButtonLabel: 'Skip',
  optionalInstallButtonLabel: 'Update Now',
  optionalUpdateMessage: 'Optional Update (Recommended)\n\n',
  title: 'A New Update',
  installMode: codePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  deploymentKey: Platform.select({
    ios: Config.CODEPUSH_KEY_IOS,
    android: Config.CODEPUSH_KEY_ANDROID,
  }),
};
export default codePush(codePushOptions)(App);
