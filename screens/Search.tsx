import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {useSearch} from '../store/moviesStore';
import {COLORS} from '../constants';
import {Result} from '../services/service';
import {EmptySearch, SearchInput, SearchListItem} from '../components';

export const Search = () => {
  const {searchResult, setSearchResult, searchField, setSearchField} =
    useSearch();

  if (searchResult.length === 0) {
    return <EmptySearch />;
  }

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
        <FlatList
          data={searchResult}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}) => (
            <SearchListItem
              posterPath={item.poster_path}
              releaseDate={item.release_date}
              title={item.title}
              voteAverage={item.vote_average}
            />
          )}
        />
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
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 90,
  },
});
