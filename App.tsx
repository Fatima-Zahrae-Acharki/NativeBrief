import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={{
          width:300,
          flex: 1,
          alignSelf: 'center',
        }}>Some text</Text>
      <View>
        <Text style={{
          width:300,
          flex: 1,
          alignSelf: 'center',
        }}>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'blue',
          borderWidth: 1,
          borderRadius: 20,
          width:300,
          alignSelf: 'center',
        }}
        defaultValue="You can type here"
      />
    </ScrollView>
  );
};

export default App;