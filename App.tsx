/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// https://github.com/react-native-svg/react-native-svg
// const LineExample = () => {
//   return (
//     <Svg height="100" width="100">
//       <Line
//         x2="300"
//         stroke="red"
//       />
//     </Svg>
//   );
// }

const App = () => {
  return (
    <View style={styles.app}>
      <Text>TITLE</Text>
      <View style={styles.box}>
        <View style={styles.viewBox}>
          <Text style={styles.text1}>Hightest at</Text>
          <Text style={styles.text2}>1,000,000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '20%'
  },
  box: {
    backgroundColor: '#fff',
    height: 249,
    width: 335,
    borderRadius: 12,
  },
  viewBox: {
    paddingTop: 50
  },
  text1: {
    textAlign: 'center',
    paddingTop: 12,
    opacity: 0.6,
    color: '#000',
    fontSize: 14,
    fontFamily: 'Helvetica-Regular',
  },
  text2: {
    textAlign: 'center',
    paddingTop: 12,
    fontSize: 50,
    color: '#000',
    fontFamily: 'DIN-Bold',
    fontWeight: 'bold'
  }
});

export default App;
