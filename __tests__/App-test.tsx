/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});




// structuring tests
// it('given a date in the past, colorForDueDate() returns red', () => {
//   expect(colorForDueDate('2000-10-20')).toBe('red');
// });
// export default colorForDueDate;



//testing

// test('given empty GroceryShoppingList, user can add an item to it', () => {
//   const {getByPlaceholder, getByText, getAllByText} = render(
//     <GroceryShoppingList />,
//   );

//   fireEvent.changeText(
//     getByPlaceholder('Enter grocery item'),
//     'banana',
//   );
//   fireEvent.press(getByText('Add the item to list'));

//   const bananaElements = getAllByText('banana');
//   expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
// });


{/* <Text
  style={
    Object {
      "fontSize": 20,
      "textAlign": "center",
    }
  }>
  Welcome to React Native!
</Text> */}