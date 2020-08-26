import React from 'react';
import { StyleSheet, View } from 'react-native';
import Image360View from './components/360view';

const remoteImages = [
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-1.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-2.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-3.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-4.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-5.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-6.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-7.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-8.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-9.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-10.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-11.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-12.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-13.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-14.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-15.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-16.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-17.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-18.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-19.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-20.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-21.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-22.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-23.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-24.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-25.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-26.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-27.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-28.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-29.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-30.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-31.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-32.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-33.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-34.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-35.jpg',
  'https://raw.githubusercontent.com/phuochau/react-native-360-image-viewer/master/example/images/iris-36.jpg'
].reverse();

const localImages = [
  require(`./images/iris-1.jpg`),
  require(`./images/iris-2.jpg`),
  require(`./images/iris-3.jpg`),
  require(`./images/iris-4.jpg`),
  require(`./images/iris-5.jpg`),
  require(`./images/iris-6.jpg`),
  require(`./images/iris-7.jpg`),
  require(`./images/iris-8.jpg`),
  require(`./images/iris-9.jpg`),
  require(`./images/iris-10.jpg`),
  require(`./images/iris-11.jpg`),
  require(`./images/iris-12.jpg`),
  require(`./images/iris-13.jpg`),
  require(`./images/iris-14.jpg`),
  require(`./images/iris-15.jpg`),
  require(`./images/iris-16.jpg`),
  require(`./images/iris-17.jpg`),
  require(`./images/iris-18.jpg`),
  require(`./images/iris-19.jpg`),
  require(`./images/iris-20.jpg`),
  require(`./images/iris-21.jpg`),
  require(`./images/iris-22.jpg`),
  require(`./images/iris-23.jpg`),
  require(`./images/iris-24.jpg`),
  require(`./images/iris-25.jpg`),
  require(`./images/iris-26.jpg`),
  require(`./images/iris-27.jpg`),
  require(`./images/iris-28.jpg`),
  require(`./images/iris-29.jpg`),
  require(`./images/iris-30.jpg`),
  require(`./images/iris-31.jpg`),
  require(`./images/iris-32.jpg`),
  require(`./images/iris-33.jpg`),
  require(`./images/iris-34.jpg`),
  require(`./images/iris-35.jpg`),
  require(`./images/iris-36.jpg`)
].reverse();

export default function App() {
  return (
    <View style={styles.container}>
      <Image360View
        local
        srcset={localImages}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
