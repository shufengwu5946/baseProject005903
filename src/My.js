import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  NativeModules,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNFS from 'react-native-fs';
// import ApkInstaller from 'react-native-apk-install';

const My = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TouchableOpacity
            onPress={() => {
              try {
                const filePath = `${RNFS.CachesDirectoryPath}/app-release.apk`;
                const download = RNFS.downloadFile({
                  fromUrl:
                    'https://github.com/shufengwu5946/testUpgrade/raw/master/app-release.apk',
                  toFile: filePath,
                  progress: (res) => {
                    console.log(res.bytesWritten);
                    console.log(res.contentLength);
                  },
                  progressDivider: 1,
                });

                download.promise.then((result) => {
                  if (result.statusCode === 200) {
                    console.log(filePath);
                    // ApkInstaller.install(filePath);
                  }
                });
              } catch (error) {
                console.warn(error);
              }
            }}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>检查更新</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default My;
