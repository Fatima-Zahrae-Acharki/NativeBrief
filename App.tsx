import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';



//increase / decrease typescript example
export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Dattebayo: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0,
}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    baseEnthusiasmLevel,
  );

  const onIncrement = () =>
    setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(
      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0,
    );

  const fishCakes = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('🍥') : '';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Dattebayo {name}
        {fishCakes(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="pink"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="powderblue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Dattebayo;