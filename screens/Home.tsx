import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants';
import Search from '../assets/images/Search.svg';

export const Home = () => {
  const [search, setSearch] = React.useState('');

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.background,
        flex: 1,
        paddingHorizontal: 24,
      }}>
      <Text style={{color: COLORS.white, fontSize: 18, fontWeight: '600'}}>
        What do you want to watch?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: COLORS.lightGray,
          paddingVertical: 10,
          paddingLeft: 24.7,
          borderRadius: 16,
          justifyContent: 'space-between',
          marginTop: 24,
          paddingRight: 14.82,
        }}>
        <TextInput
          style={{color: COLORS.white, width: '90%'}}
          onChangeText={setSearch}
          value={search}
          placeholder="Search"
        />
        <Search />
      </View>
    </SafeAreaView>
  );
};
