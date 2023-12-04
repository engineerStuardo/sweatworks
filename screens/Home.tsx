import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS} from '../constants';
import {Result, getPopularMovies} from '../services/service';
import {TabViewMoview} from '../navigation/TabView';
import {RootStackParamList} from '../navigation/types';
import useMovies, {useSearch} from '../store/moviesStore';
import {HorizontalList, SearchInput} from '../components';

export const Home = () => {
  const {setMovies, popular} = useMovies();
  const {setSearchField, setSearchResult, searchField} = useSearch();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    (async () => {
      const results = (await getPopularMovies()) || [];
      setMovies(results, 'popular');
    })();
  }, [setMovies]);

  if (popular.length === 0) {
    return <ActivityIndicator />;
  }

  const callback = (result: Result[]) => {
    setSearchResult(result);
    navigation.navigate('tab', {screen: 'search'});
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <Text style={styles.title}>What do you want to watch?</Text>
      <SearchInput
        search={searchField}
        setSearch={setSearchField}
        callback={callback}
      />
      <HorizontalList popular={popular} />
      <TabViewMoview />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
