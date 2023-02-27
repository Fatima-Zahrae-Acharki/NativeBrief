import React, {Component, useState} from "react";
import {Button, Text, View} from 'react-native';

//functional component

// const Cat = props => {
//   const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? ' hungry' : 'full'} !
//       </Text>
//       <Button
//       onPress={() => {
//         setIsHungry(false);
//       }}
//       disabled={!isHungry}
//       title={isHungry ? 'pour me some milk, please !' : 'Thank you, nya !'}
//       />
//     </View>
//   );
// };

// const Cafe = () => {
//   return (
//     <>
//     <Cat name='yuuki' /> 
//     <Cat name='jiji' /> 
//     </>
//   );
// };



//class components

class Cat extends Component {
  state = {isHungry: true};

  render() {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am  
          {this.state.isHungry ? ' hungry' : 'full'} !
        </Text>
        <Button
        onPress={() => {
          this.setState({isHungry: false});
        }}
        disabled={!this.state.isHungry}
        title={
          this.state.isHungry ? 'Pour me some milk, please !' : 'Thank you, nya !'
        }
        />
      </View>
    );
  }

}
class Cafe extends Component {
  render(){
    return(
      <>
      <Cat name='yuuki'/>
      <Cat name='jiji'/>
      </>
    )
  }
}

export default Cafe;