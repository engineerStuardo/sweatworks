import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useMovies from '../store/moviesStore';
import {SearchListItem} from '../components';
import {WatchListEmpty} from '../components/WatchListEmpty';

export const WatchList = () => {
  const {watchList} = useMovies();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={watchList}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <SearchListItem
              posterPath={item.poster_path}
              releaseDate={item.release_date}
              title={item.title}
              voteAverage={item.vote_average}
              genre={item.genres[0].name}
              runtime={item.runtime}
            />
          </View>
        )}
        ListEmptyComponent={() => <WatchListEmpty />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242A32',
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  itemContainer: {
    marginLeft: 32,
    marginRight: 36,
  },
});
