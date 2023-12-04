import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../constants';
import NoResults from '../assets/images/NoResults.svg';
import {SearchInput} from './SearchInput';
import {useSearch} from '../store/moviesStore';
import {Result} from '../services/service';

export const EmptySearch = () => {
  const {searchField, setSearchField, setSearchResult} = useSearch();

  const callback = (results: Result[]) => {
    setSearchResult(results);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <SearchInput
          search={searchField}
          setSearch={setSearchField}
          callback={callback}
        />
      </View>
      <View style={styles.bottomContainer}>
        <NoResults />
        <Text style={styles.titleLine1}>we are sorry, we can </Text>
        <Text style={styles.titleLine2}>not find the movie :(</Text>
        <Text style={styles.subtitle}>Find your movie by Type title,</Text>
        <Text style={styles.subtitle}> categories, years, etc </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  innerContainer: {
    marginLeft: 32,
    marginRight: 36,
  },
  bottomContainer: {
    alignItems: 'center',
    flex: 0.75,
    justifyContent: 'center',
  },
  titleLine1: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.watchListText,
    textTransform: 'capitalize',
    marginTop: 16,
  },
  titleLine2: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.watchListText,
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textGray,
  },
});
