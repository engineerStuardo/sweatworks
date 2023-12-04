import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {StackNavigationOptions} from '@react-navigation/stack';

import {Header} from '../components';
import BackButton from '../assets/images/BackButton.svg';
import useMovies from '../store/moviesStore';
import {isAddedToWatchList} from '../utils/FilterMovies';
import {COLORS} from '../constants';
import Favorite from '../assets/images/Favorite.svg';
import FavoriteAdded from '../assets/images/FavoriteAdded.svg';

interface Props {
  onPress: () => void;
  canGoBack: boolean;
}

export const useDetailOptions = () => {
  const {movieDetail, setWatchList, watchList, removeFromWatchList} =
    useMovies();
  const isAdded = isAddedToWatchList(movieDetail, watchList);

  const detailOptions = {
    headerTitle: () => <Header title="Detail" />,
    headerStyle: styles.detailHeaderStyles,
    headerRight: () => (
      <TouchableOpacity
        style={styles.paddingRight}
        onPress={() => {
          if (isAdded) {
            removeFromWatchList(movieDetail);
            return;
          }

          setWatchList(movieDetail);
        }}>
        {isAdded ? <FavoriteAdded /> : <Favorite />}
      </TouchableOpacity>
    ),
    headerLeft: ({onPress, canGoBack}: Props) =>
      canGoBack && (
        <View style={styles.paddingLeft}>
          <TouchableOpacity onPress={onPress}>
            <BackButton />
          </TouchableOpacity>
        </View>
      ),
  };

  return detailOptions as StackNavigationOptions;
};

const styles = StyleSheet.create({
  detailHeaderStyles: {
    backgroundColor: COLORS.background,
    borderBottomWidth: 0,
    borderBottomColor: COLORS.background,
    elevation: 0,
    shadowOpacity: 0,
  },
  paddingRight: {
    paddingRight: 24,
  },
  paddingLeft: {
    paddingLeft: 12,
  },
});
