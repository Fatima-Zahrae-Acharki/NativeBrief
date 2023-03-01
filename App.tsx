//platform module

// import {Platform, StyleSheet} from 'react-native';


// const styles = StyleSheet.create({
//   height: Platform.OS === 'android' ? 200 : 100,
// });



//platform.select method


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     ...Platform.select({
//       ios: {
//         backgroundColor: 'red',
//       },
//       android: {
//         backgroundColor: 'green',
//       },
//       default: {
//         // other platforms, web for example
//         backgroundColor: 'blue',
//       },
//     }),
//   },
// });

//to return platform-specific components

// const Component = Platform.select({
//   ios: () => require('ComponentIOS'),
//   android: () => require('ComponentAndroid'),
// })();

// <Component />;

//others

// const Component = Platform.select({
//   native: () => require('ComponentForNative'),
//   default: () => require('ComponentForWeb'),
// })();

// <Component />;


//Detecting the Android version
//On Android, the Platform module can also be used to detect the version of the Android Platform in which the app is running:

// import {Platform} from 'react-native';

// if (Platform.Version === 25) {
//   console.log('Running on Nougat!');
// }



//Platform-specific extensions

// BigButton.android.js

//to import the component

// import BigButton from './BigButton';



//Native-specific extensions (i.e. sharing code with NodeJS and Web)

// Container.js # picked up by Webpack, Rollup or any other Web bundler
// Container.native.js # picked up by the React Native bundler for both Android and iOS (Metro)


//import files without .native

// import Container from './Container';