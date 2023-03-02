import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';



/////////////////////////styles

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




/////////////////////////////////height and width

//////fixed dimentions

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


//////flex dimentions

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



//////percentage dimensions

// const PercentageDimensionsBasics = () => {
//   return (
//     <View style={{height: '100%'}}>
//       <View
//         style={{
//           height: '15%',
//           backgroundColor: 'powderblue',
//         }}
//       />
//       <View
//         style={{
//           width: '66%',
//           height: '35%',
//           backgroundColor: 'skyblue',
//         }}
//       />
//       <View
//         style={{
//           width: '33%',
//           height: '50%',
//           backgroundColor: 'steelblue',
//         }}
//       />
//     </View>
//   );
// };

// export default PercentageDimensionsBasics;




//////////////////////////////layout with flexbox


////////flex

// const Flex = () => {
//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           //row will appear vertically
//           // flexDirection: 'row',
//           flexDirection: 'column',//horizontally
//         },
//       ]}>
//       <View style={{flex: 1, backgroundColor: 'pink'}} />
//       <View style={{flex: 2, backgroundColor: 'white'}} />
//       <View style={{flex: 3, backgroundColor: 'powderblue'}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// export default Flex;


///////flex direction

// const FlexDirectionBasics = () => {
//   const [flexDirection, setflexDirection] = useState('column');

//   return (
//     <PreviewLayout
//       label="flexDirection"
//       values={['column', 'row', 'row-reverse', 'column-reverse']}
//       selectedValue={flexDirection}
//       setSelectedValue={setflexDirection}>
//       <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{padding: 10, flex: 1}}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map(value => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}>
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}>
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: 'oldlace',
//     alignSelf: 'flex-start',
//     marginHorizontal: '1%',
//     marginBottom: 6,
//     minWidth: '48%',
//     textAlign: 'center',
//   },
//   selected: {
//     backgroundColor: 'coral',
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'coral',
//   },
//   selectedLabel: {
//     color: 'white',
//   },
//   label: {
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default FlexDirectionBasics;



//////layout direction:flex direction

const DirectionLayout = () => {
  const [direction, setDirection] = useState('ltr');

  return(
    <PreviewLayout
    label='direction'
    selectedValue={direction}
    values={['ltr', 'rtl']}
    setSelectedValue= {setDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
        key={value}
        onPress={() => setSelectedValue(value)}
        style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
          style={[
            styles.buttonLabel,
            selectedValue === value && styles.selectedLabel,
          ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 50,
    height: 50,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default DirectionLayout;
    