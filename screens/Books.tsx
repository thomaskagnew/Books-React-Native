/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const DeviceWidth = Dimensions.get('window').width;
export const DeviceHeight = Dimensions.get('window').height;

export type Book = {
  title: string;
  description: string;
  discount_rate: number;
  cover_image: string;
  price: number;
};

type BookItemProps = {
  book: Book;
  onPress: Function;
};

const BookItem = ({book, onPress}: BookItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(book)}
      style={{flex: 1, margin: 1}}>
      <Image
        source={{uri: book.cover_image}}
        style={{width: DeviceWidth * 0.49, height: 300}}
      />
      <Text style={{paddingLeft: 5}}>{book.title}</Text>
      <View style={{display: 'flex', padding: 5, flexDirection: 'row'}}>
        <Text style={{color: 'red', flex: 1}}>{book.discount_rate}%</Text>
        <Text style={{fontWeight: 'bold'}}>{book.price} 원</Text>
      </View>
    </TouchableOpacity>
  );
};

const Books = () => {
  const [loading, setLoading] = useState<boolean>();
  const [books, setBooks] = useState<Book[]>([]);

  const navigation = useNavigation();

  const loadBooks = () => {
    console.log({books}, 'books');
    setLoading(true);
    axios({
      method: 'get',
      url: 'http://localhost:3000/books',
    })
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.log({error});
        setLoading(false);
      });
  };

  useEffect(() => loadBooks(), []);

  return (
    <SafeAreaView>
      <FlatList
        style={{backgroundColor: 'white'}}
        data={books}
        numColumns={2}
        renderItem={({item}) => (
          <BookItem
            onPress={(book: Book) =>
              navigation.navigate('BookDetail', {
                book: book,
              })
            }
            book={item}
          />
        )}
        keyExtractor={item => item.title}
        refreshing={loading}
      />
    </SafeAreaView>
  );
};

export default Books;
