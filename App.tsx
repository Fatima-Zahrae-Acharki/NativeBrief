import React from "react";
import {StyleSheet, Text, View} from 'react-native';



//styles

// const LotsOfStyles = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.pink}>pink color</Text>
//       <Text style={styles.white}>white color</Text>
//       <Text style={[styles.pink, styles.white]}>pink, then white</Text>
//       <Text style={[styles.white, styles.pink]}>white, then pink</Text>
//     </View>
//   );
// };

// const styles=StyleSheet.create({
//   container: {
//     marginTop: 200,
//     alignItems: 'center',
//   },
//   white: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   pink: {
//     color: 'pink',
//   },
// });

// export default LotsOfStyles;



//height and width

//fixed dimentions

// const FixedDimentionsBasics = () => {
//   return (
//     <View>
//          <View
//         style={{
//           width: 50,
//           height: 50,
//           backgroundColor: 'powderblue',
//         }}
//       />
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: 'skyblue',
//         }}
//       />
//       <View
//         style={{
//           width: 150,
//           height: 150,
//           backgroundColor: 'steelblue',
//         }}
//       />
//     </View>
//   );
// };

// export default FixedDimentionsBasics;


//flex dimentions

// const FlexDimensionsBasics = () => {
//   return (
//     //if u remove the parent the children will disappear
//     //if we add `height: 300` instead of `flex: 1` the height of the box will be 300
//     <View style={{flex: 1}}>
//       <View style={{flex: 1, backgroundColor: 'powderblue'}} />  
//       <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//       <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//     </View>
//   );
// };

// export default FlexDimensionsBasics;



//percentage dimensions

const PercentageDimensionsBasics = () => {
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          height: '15%',
          backgroundColor: 'powderblue',
        }}
      />
      <View
        style={{
          width: '66%',
          height: '35%',
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          width: '33%',
          height: '50%',
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
};

export default PercentageDimensionsBasics;