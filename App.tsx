import React, { Component } from "react";
import {Text} from 'react-native';



// function component

// const Kirby = () => {
//   return <Text>Hello, I am Kirby</Text>;
// };



//class component

class Kirby extends Component {
  render() {
    return <Text>Hello, I am Kirby.</Text>;
  }
}

export default Kirby;