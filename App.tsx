import React from "react";
import {Image, Text, View} from 'react-native';

// const Kirby = props => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name} !</Text>
//     </View>
//   );
// };

// const Cafe = () => {
//   return (
//     <View>
//       <Kirby name='Lloyd' />
//       <Kirby name='Yoru' />
//       <Kirby name='Anya' />
//     </View>
//   );
// };


//using image

const Cafe = () => {
  return(
    <View>
      <Image
      source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      }}
      style={{width:200, height: 200}}
        />
      <Text>Hello, I am your cat !</Text>
    </View>
  )
}

export default Cafe;
