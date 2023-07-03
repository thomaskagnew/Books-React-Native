/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {DeviceHeight, DeviceWidth} from './Books';

const BookDetail = ({route}) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          display: 'flex',
          minHeight: DeviceHeight,
          backgroundColor: 'white',
        }}>
        <Image
          source={{uri: route.params.book.cover_image}}
          style={{width: DeviceWidth, height: 300}}
        />
        <View style={{padding: 3}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            {' '}
            {route.params.book.title}
          </Text>
          <Text>{route.params.book.description}</Text>
          <View style={{display: 'flex', paddingTop: 3, flexDirection: 'row'}}>
            <Text style={{flex: 1, color: 'red'}}>
              {route.params.book.discount_rate}%
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              {route.params.book.price} 원
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;
