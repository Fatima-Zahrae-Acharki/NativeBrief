import React from "react";
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';

//flat list

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// const FlatListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//       data={[
//         {key: 'deku'},
//         {key: 'shoto'},
//         {key: 'bakugo'},
//         {key: 'all might'},
//         {key: 'eraser head'},
//         {key: 'hawks'},
//         {key: 'endeavor'},
//         {key: 'best jeanist'},
//         {key: 'edge shot'},
//         {key: 'fat gam'},
//         {key: 'grand torino'},
//       ]}
//       renderItem={({item}) => <Text style={styles.item}>{item.key}</Text> }
//       />
//     </View>

//   );
// };

// export default FlatListBasics




//section list

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'pink',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    alignSelf: 'center',
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'Students', data: ['Deku', 'Bakugo', 'Shoto']},
          {
            title: 'Heroes',
            data: [
              'Endeavor',
              'Hawks',
              'Best jeanist',
              'All might',
              'Miruko',
              'Eraser head',
              'Edge shot',
              'Fat gam',
              'Grand torino',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListBasics;
