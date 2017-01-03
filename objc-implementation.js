import React, { Component } from 'react';
import { Image, Dimensions, Text, StyleSheet, View } from 'react-native';
import { RNCubeTransition } from 'react-native-cube-transition';

const { width, height } = Dimensions.get('window');

const images = [
  `https://unsplash.it/${width}/${height}?random&1`,
  `https://unsplash.it/${width}/${height}?random&2`,
  `https://unsplash.it/${width}/${height}?random&3`,
]

export default class CubeTransitionExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCubeTransition style={styles.page}>
          <Image
            source={require('./assets/1.jpg')}
            style={styles.image}
          />
          <Image
            source={require('./assets/2.jpg')}
            style={styles.image}
            key="2"
          />
          <Image
            source={require('./assets/3.jpg')}
            style={styles.image}
            key="3"
          />
          <Image
            source={require('./assets/4.jpg')}
            style={styles.image}
            key="4"
          />
          <Image
            source={require('./assets/5.jpg')}
            style={styles.image}
            key="5"
          />
          <Image
            source={require('./assets/6.jpg')}
            style={styles.image}
            key="6"
          />
        </RNCubeTransition>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  page: {
    position: 'absolute',
    flexDirection: 'row',
    overflow: 'hidden',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    resizeMode: 'stretch',
    width,
    height,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
  },
});
