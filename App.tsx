import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';


class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  
 

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}  onPress={this.onPress}>
          <Text style={styles.black}>Click me</Text>
        </TouchableOpacity>
        <View>
          
          <Text style={styles.text} >You clicked {this.state.count} times</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'powderblue'
  },
  black: {
    color: 'black',
  },
  pink: {
    color: 'pink',
  },
  text: {
    fontSize: 20,
    color: 'darkblue',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 20,
    width: 150,
    height: 50,
  },
 
});

export default App;