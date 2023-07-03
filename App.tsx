/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Books from './screens/Books';
import BookDetail from './screens/BookDetail';
import {Text} from 'react-native';
import {Book} from './screens/Books';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Books: null;
  BookDetail: {
    book: Book;
  };
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: () => (
              <Text style={{textAlign: 'center'}}>자유톡</Text>
            ),
          }}
          name="Books"
          component={Books}
        />
        <Stack.Screen
          options={({route}) => ({title: route.params.book.title})}
          name="BookDetail"
          component={BookDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
