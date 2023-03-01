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
const FixedDimentionsBasics = () => {
  return (
    <View>
         <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
};

export default FixedDimentionsBasics;