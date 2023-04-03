import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';


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

// const DirectionLayout = () => {
//   const [direction, setDirection] = useState('ltr');

//   return(
//     <PreviewLayout
//     label='direction'
//     selectedValue={direction}
//     values={['ltr', 'rtl']}
//     setSelectedValue= {setDirection}>
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
//         key={value}
//         onPress={() => setSelectedValue(value)}
//         style={[styles.button, selectedValue === value && styles.selected]}>
//           <Text
//           style={[
//             styles.buttonLabel,
//             selectedValue === value && styles.selectedLabel,
//           ]}>
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, {[label]: selectedValue}]}>{children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//   },
//   row:{
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   box: {
//     width: 50,
//     height: 50,
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

// export default DirectionLayout;



///////justify content

// const JustifyContentBasics = () => {
//   const [justifyContent, setJustifyContent] = useState('flex-start');

//   return (
//     <PreviewLayout
//     label='justifyContent'
//     selectedValue={justifyContent}
//     values={[
//       'flex-start',
//       'flex-end',
//       'center',
//       'space-between',
//       'space-around',
//       'space-evenly',
//     ]}
//     setSelectedValue={setJustifyContent}>
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

// export default JustifyContentBasics;
  


////////align items

// const AlignItemsLayout = () => {
//   const [alignItems, setAlignItems] = useState('stretch');

//   return (
//     <PreviewLayout
//       label="alignItems"
//       selectedValue={alignItems}
//       values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
//       setSelectedValue={setAlignItems}>
//       <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//       <View
//         style={[
//           styles.box,
//           {
//             backgroundColor: 'steelblue',
//             width: 'auto',
//             minWidth: 50,
//           },
//         ]}
//       />
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
//     minHeight: 200,
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

// export default AlignItemsLayout;


//////align self


// const AlignSelfLayout = () => {
//   const [alignSelf, setAlignSelf] = useState('stretch');

//   return (
//     <PreviewLayout
//       label="alignSelf"
//       selectedValue={alignSelf}
//       values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
//       setSelectedValue={setAlignSelf}>
//       <View
//         style={[
//           styles.box,
//           {
//             alignSelf,
//             width: 'auto',
//             minWidth: 50,
//             backgroundColor: 'powderblue',
//           },
//         ]}
//       />
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
//     <View style={styles.container}>{children}</View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//     minHeight: 200,
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

// export default AlignSelfLayout;



///////align content

// const AlignContentLayout = () => {
//   const [alignContent, setAlignContent] = useState('flex-start');

//   return (
//     <PreviewLayout
//       label="alignContent"
//       selectedValue={alignContent}
//       values={[
//         'flex-start',
//         'flex-end',
//         'stretch',
//         'center',
//         'space-between',
//         'space-around',
//       ]}
//       setSelectedValue={setAlignContent}>
//       <View style={[styles.box, {backgroundColor: 'orangered'}]} />
//       <View style={[styles.box, {backgroundColor: 'orange'}]} />
//       <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
//       <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
//       <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'purple'}]} />
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
//     flexWrap: 'wrap',
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//     maxHeight: 400,
//   },
//   box: {
//     width: 50,
//     height: 80,
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

// export default AlignContentLayout;



////////flex wrap

// const FlexWrapLayout = () => {
//     const [flexWrap, setFlexWrap] = useState('wrap');
  
//     return (
//       <PreviewLayout
//         label="flexWrap"
//         selectedValue={flexWrap}
//         values={['wrap', 'nowrap']}
//         setSelectedValue={setFlexWrap}>
//         <View style={[styles.box, {backgroundColor: 'orangered'}]} />
//         <View style={[styles.box, {backgroundColor: 'orange'}]} />
//         <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
//         <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
//         <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
//         <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
//         <View style={[styles.box, {backgroundColor: 'purple'}]} />
//       </PreviewLayout>
//     );
//   };
  
//   type PreviewLayoutProps = PropsWithChildren<{
//     label: string;
//     values: string[];
//     selectedValue: string;
//     setSelectedValue: (value: string) => void;
//   }>;
  
//   const PreviewLayout = ({
//     label,
//     children,
//     values,
//     selectedValue,
//     setSelectedValue,
//   }: PreviewLayoutProps) => (
//     <View style={{padding: 10, flex: 1}}>
//       <Text style={styles.label}>{label}</Text>
//       <View style={styles.row}>
//         {values.map(value => (
//           <TouchableOpacity
//             key={value}
//             onPress={() => setSelectedValue(value)}
//             style={[styles.button, selectedValue === value && styles.selected]}>
//             <Text
//               style={[
//                 styles.buttonLabel,
//                 selectedValue === value && styles.selectedLabel,
//               ]}>
//               {value}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
//     </View>
//   );
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: 8,
//       backgroundColor: 'aliceblue',
//       maxHeight: 400,
//     },
//     box: {
//       width: 50,
//       height: 80,
//     },
//     row: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//     },
//     button: {
//       paddingHorizontal: 8,
//       paddingVertical: 6,
//       borderRadius: 4,
//       backgroundColor: 'oldlace',
//       marginHorizontal: '1%',
//       marginBottom: 6,
//       minWidth: '48%',
//       textAlign: 'center',
//     },
//     selected: {
//       backgroundColor: 'coral',
//       borderWidth: 0,
//     },
//     buttonLabel: {
//       fontSize: 12,
//       fontWeight: '500',
//       color: 'coral',
//     },
//     selectedLabel: {
//       color: 'white',
//     },
//     label: {
//       textAlign: 'center',
//       marginBottom: 10,
//       fontSize: 24,
//     },
//   });
  
//   export default FlexWrapLayout;



//////Flex Basis, Grow, and Shrink


// const App = () => {
//     const [powderblue, setPowderblue] = useState<ViewStyle>({
//       flexGrow: 0,
//       flexShrink: 1,
//       flexBasis: 'auto',
//     });
//     const [skyblue, setSkyblue] = useState<ViewStyle>({
//       flexGrow: 1,
//       flexShrink: 0,
//       flexBasis: 100,
//     });
//     const [steelblue, setSteelblue] = useState<ViewStyle>({
//       flexGrow: 0,
//       flexShrink: 1,
//       flexBasis: 200,
//     });
//     return (
//       <View style={styles.container}>
//         <View
//           style={[
//             styles.container,
//             {
//               flexDirection: 'row',
//               alignContent: 'space-between',
//             },
//           ]}>
//           <BoxInfo color="powderblue" {...powderblue} setStyle={setPowderblue} />
//           <BoxInfo color="skyblue" {...skyblue} setStyle={setSkyblue} />
//           <BoxInfo color="steelblue" {...steelblue} setStyle={setSteelblue} />
//         </View>
//         <View style={styles.previewContainer}>
//           <View
//             style={[
//               styles.box,
//               {
//                 flexBasis: powderblue.flexBasis,
//                 flexGrow: powderblue.flexGrow,
//                 flexShrink: powderblue.flexShrink,
//                 backgroundColor: 'powderblue',
//               },
//             ]}
//           />
//           <View
//             style={[
//               styles.box,
//               {
//                 flexBasis: skyblue.flexBasis,
//                 flexGrow: skyblue.flexGrow,
//                 flexShrink: skyblue.flexShrink,
//                 backgroundColor: 'skyblue',
//               },
//             ]}
//           />
//           <View
//             style={[
//               styles.box,
//               {
//                 flexBasis: steelblue.flexBasis,
//                 flexGrow: steelblue.flexGrow,
//                 flexShrink: steelblue.flexShrink,
//                 backgroundColor: 'steelblue',
//               },
//             ]}
//           />
//         </View>
//       </View>
//     );
//   };
  
//   type BoxInfoProps = ViewStyle & {
//     color: string;
//     setStyle: React.Dispatch<React.SetStateAction<ViewStyle>>;
//   };
  
//   const BoxInfo = ({
//     color,
//     flexBasis,
//     flexShrink,
//     setStyle,
//     flexGrow,
//   }: BoxInfoProps) => (
//     <View style={[styles.row, {flexDirection: 'column'}]}>
//       <View
//         style={[
//           styles.boxLabel,
//           {
//             backgroundColor: color,
//           },
//         ]}>
//         <Text
//           style={{
//             color: '#fff',
//             fontWeight: '500',
//             textAlign: 'center',
//           }}>
//           Box
//         </Text>
//       </View>
//       <Text style={styles.label}>flexBasis</Text>
//       <TextInput
//         value={String(flexBasis)}
//         style={styles.input}
//         onChangeText={fB =>
//           setStyle(value => ({
//             ...value,
//             flexBasis: isNaN(parseInt(fB, 10)) ? 'auto' : parseInt(fB, 10),
//           }))
//         }
//       />
//       <Text style={styles.label}>flexShrink</Text>
//       <TextInput
//         value={String(flexShrink)}
//         style={styles.input}
//         onChangeText={fS =>
//           setStyle(value => ({
//             ...value,
//             flexShrink: isNaN(parseInt(fS, 10)) ? undefined : parseInt(fS, 10),
//           }))
//         }
//       />
//       <Text style={styles.label}>flexGrow</Text>
//       <TextInput
//         value={String(flexGrow)}
//         style={styles.input}
//         onChangeText={fG =>
//           setStyle(value => ({
//             ...value,
//             flexGrow: isNaN(parseInt(fG, 10)) ? undefined : parseInt(fG, 10),
//           }))
//         }
//       />
//     </View>
//   );
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingHorizontal: 10,
//     },
//     box: {
//       flex: 1,
//       height: 50,
//       width: 50,
//     },
//     boxLabel: {
//       minWidth: 80,
//       padding: 8,
//       borderRadius: 4,
//       marginTop: 8,
//     },
//     label: {
//       marginTop: 6,
//       fontSize: 16,
//       fontWeight: '100',
//     },
//     previewContainer: {
//       flex: 1,
//       flexDirection: 'row',
//       backgroundColor: 'aliceblue',
//     },
//     row: {
//       flex: 1,
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       alignItems: 'center',
//       marginBottom: 10,
//     },
//     input: {
//       borderBottomWidth: 1,
//       paddingVertical: 3,
//       width: 50,
//       textAlign: 'center',
//     },
//   });
  
//   export default App;



////////Row Gap, Column Gap and Gap

// const RowGapAndColumnGap = () => {
//     const [rowGap, setRowGap] = useState(20);
//     const [columnGap, setColumnGap] = useState(10);
  
//     return (
//       <PreviewLayout
//         columnGap={columnGap}
//         handleColumnGapChange={setColumnGap}
//         rowGap={rowGap}
//         handleRowGapChange={setRowGap}>
//         <View style={[styles.box, styles.box1]} />
//         <View style={[styles.box, styles.box2]} />
//         <View style={[styles.box, styles.box3]} />
//         <View style={[styles.box, styles.box4]} />
//         <View style={[styles.box, styles.box5]} />
//       </PreviewLayout>
//     );
//   };
  
//   type PreviewLayoutProps = PropsWithChildren<{
//     columnGap: number;
//     handleColumnGapChange: (gap: number) => void;
//     rowGap: number;
//     handleRowGapChange: (gap: number) => void;
//   }>;
  
//   const PreviewLayout = ({
//     children,
//     handleColumnGapChange,
//     handleRowGapChange,
//     rowGap,
//     columnGap,
//   }: PreviewLayoutProps) => (
//     <View style={styles.previewContainer}>
//       <View style={styles.inputContainer}>
//         <View style={styles.itemsCenter}>
//           <Text>Row Gap</Text>
//           <TextInput
//             style={styles.input}
//             value={String(rowGap)}
//             onChangeText={v => handleRowGapChange(Number(v))}
//           />
//         </View>
//         <View style={styles.itemsCenter}>
//           <Text>Column Gap</Text>
//           <TextInput
//             style={styles.input}
//             value={String(columnGap)}
//             onChangeText={v => handleColumnGapChange(Number(v))}
//           />
//         </View>
//       </View>
//       <View style={[styles.container, {rowGap, columnGap}]}>{children}</View>
//     </View>
//   );
  
//   const styles = StyleSheet.create({
//     itemsCenter: {alignItems: 'center'},
//     inputContainer: {
//       gap: 4,
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//     },
//     previewContainer: {padding: 10, flex: 1},
//     input: {
//       borderBottomWidth: 1,
//       paddingVertical: 3,
//       width: 50,
//       textAlign: 'center',
//     },
//     container: {
//       flex: 1,
//       marginTop: 8,
//       backgroundColor: 'aliceblue',
//       maxHeight: 400,
//       flexWrap: 'wrap',
//       alignContent: 'flex-start',
//     },
//     box: {
//       width: 50,
//       height: 80,
//     },
//     box1: {
//       backgroundColor: 'orangered',
//     },
//     box2: {
//       backgroundColor: 'orange',
//     },
//     box3: {
//       backgroundColor: 'mediumseagreen',
//     },
//     box4: {
//       backgroundColor: 'deepskyblue',
//     },
//     box5: {
//       backgroundColor: 'mediumturquoise',
//     },
//   });
  
//   export default RowGapAndColumnGap;




////////////width and height




// const WidthHeightBasics = () => {
//     const [widthType, setWidthType] = useState('auto');
//     const [heightType, setHeightType] = useState('auto');
  
//     return (
//       <PreviewLayout
//         widthType={widthType}
//         heightType={heightType}
//         widthValues={['auto', 300, '80%']}
//         heightValues={['auto', 200, '60%']}
//         setWidthType={setWidthType}
//         setHeightType={setHeightType}>
//         <View
//           style={{
//             alignSelf: 'flex-start',
//             backgroundColor: 'aliceblue',
//             height: heightType,
//             width: widthType,
//             padding: 15,
//           }}>
//           <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
//           <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//           <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
//         </View>
//       </PreviewLayout>
//     );
//   };
  
//   const PreviewLayout = ({
//     children,
//     widthType,
//     heightType,
//     widthValues,
//     heightValues,
//     setWidthType,
//     setHeightType,
//   }) => (
//     <SafeAreaView style={{flex: 1, padding: 10}}>
//       <View style={styles.row}>
//         <Text style={styles.label}>width </Text>
//         {widthValues.map(value => (
//           <TouchableOpacity
//             key={value}
//             onPress={() => setWidthType(value)}
//             style={[styles.button, widthType === value && styles.selected]}>
//             <Text
//               style={[
//                 styles.buttonLabel,
//                 widthType === value && styles.selectedLabel,
//               ]}>
//               {value}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.row}>
//         <Text style={styles.label}>height </Text>
//         {heightValues.map(value => (
//           <TouchableOpacity
//             key={value}
//             onPress={() => setHeightType(value)}
//             style={[styles.button, heightType === value && styles.selected]}>
//             <Text
//               style={[
//                 styles.buttonLabel,
//                 heightType === value && styles.selectedLabel,
//               ]}>
//               {value}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       {children}
//     </SafeAreaView>
//   );
  
//   const styles = StyleSheet.create({
//     box: {
//       width: 50,
//       height: 50,
//     },
//     row: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//     },
//     button: {
//       padding: 8,
//       borderRadius: 4,
//       backgroundColor: 'oldlace',
//       alignSelf: 'flex-start',
//       marginRight: 10,
//       marginBottom: 10,
//     },
//     selected: {
//       backgroundColor: 'coral',
//       shadowOpacity: 0,
//       borderWidth: 0,
//     },
//     buttonLabel: {
//       fontSize: 12,
//       fontWeight: '500',
//       color: 'coral',
//     },
//     selectedLabel: {
//       color: 'white',
//     },
//     label: {
//       textAlign: 'center',
//       marginBottom: 10,
//       fontSize: 24,
//     },
//   });
  
//   export default WidthHeightBasics;


///////////////Absolute & Relative Layout



const PositionLayout = () => {
    const [position, setPosition] = useState('relative');
  
    return (
      <PreviewLayout
        label="position"
        selectedValue={position}
        values={['relative', 'absolute']}
        setSelectedValue={setPosition}>
        <View
          style={[
            styles.box,
            {
              top: 25,
              left: 25,
              position,
              backgroundColor: 'powderblue',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 50,
              left: 50,
              position,
              backgroundColor: 'skyblue',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 75,
              left: 75,
              position,
              backgroundColor: 'steelblue',
            },
          ]}
        />
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
      <View style={styles.container}>{children}</View>
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor: 'aliceblue',
      minHeight: 200,
    },
    box: {
      width: 50,
      height: 50,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
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
  
  export default PositionLayout;