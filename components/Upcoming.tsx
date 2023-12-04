import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import useMovies from '../store/moviesStore';
import {RootStackParamList} from '../navigation/types';
import {useEffect} from 'react';
import {getUpcomingMovies} from '../services/service';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import env from 'react-native-config';
import {PLACEHOLDER_IMAGE} from '../constants';

export const Upcoming = () => {
  const {setMovies, upcoming, setMovieId} = useMovies();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    (async () => {
      setMovies((await getUpcomingMovies()) || [], 'upcoming');
    })();
  }, [setMovies]);

  if (upcoming.length === 0) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={upcoming}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={async () => {
              setMovieId(item.id);
              navigation.navigate('detail');
            }}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{
                uri: item.poster_path
                  ? `${env.IMAGE_HOST}${item.poster_path}`
                  : PLACEHOLDER_IMAGE,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 146,
    width: 100,
    borderRadius: 16,
    marginRight: 13,
    marginBottom: 18,
  },
});
