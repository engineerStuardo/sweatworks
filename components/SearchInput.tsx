import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import {Result, getMoviesByTitle} from '../services/service';
import Search from '../assets/images/Search.svg';
import {COLORS} from '../constants';

interface Props {
  search: string;
  setSearch: (searchField: string) => void;
  callback: (result: Result[]) => void;
}

export const SearchInput = ({search, setSearch, callback}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="Search"
      />
      <TouchableOpacity
        onPress={() => {
          getMoviesByTitle(search, callback);
        }}>
        <Search />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.lightGray,
    paddingVertical: 10,
    paddingLeft: 24.7,
    borderRadius: 16,
    justifyContent: 'space-between',
    marginTop: 24,
    paddingRight: 14.82,
    marginBottom: 21,
  },
  input: {
    color: COLORS.white,
    width: '90%',
  },
});
