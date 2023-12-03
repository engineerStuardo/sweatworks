import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import env from 'react-native-config';
import {COLORS} from '../constants';
import {
  Result,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../services/service';
import useMovies from '../store/moviesStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '.';

const FirstRoute = () => {
  const {setMovies, nowPlaying, setMovieId} = useMovies();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    (async () => {
      setMovies((await getNowPlayingMovies()) || [], 'nowPlaying');
    })();
  }, [setMovies]);

  if (nowPlaying.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={nowPlaying}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={async () => {
              setMovieId(item.id);
              navigation.navigate('detail');
            }}>
            <Image
              resizeMode="cover"
              style={{
                height: 146,
                width: 100,
                borderRadius: 16,
                marginRight: 13,
                marginBottom: 18,
              }}
              source={
                item.poster_path
                  ? {uri: `${env.IMAGE_HOST}${item.poster_path}`}
                  : placeHolderImage
              }
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const SecondRoute = () => {
  const {setMovies, upcoming} = useMovies();

  useEffect(() => {
    (async () => {
      setMovies((await getUpcomingMovies()) || [], 'upcoming');
    })();
  }, [setMovies]);

  if (upcoming.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={upcoming}
        numColumns={3}
        renderItem={({item}) => (
          <Image
            resizeMode="cover"
            style={{
              height: 146,
              width: 100,
              borderRadius: 16,
              marginRight: 13,
              marginBottom: 18,
            }}
            source={
              item.poster_path
                ? {uri: `${env.IMAGE_HOST}${item.poster_path}`}
                : placeHolderImage
            }
          />
        )}
      />
    </View>
  );
};
const ThirdRoute = () => {
  const {setMovies, topRated} = useMovies();

  useEffect(() => {
    (async () => {
      setMovies((await getTopRatedMovies()) || [], 'topRated');
    })();
  }, [setMovies]);

  if (topRated.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={topRated}
        numColumns={3}
        renderItem={({item}) => (
          <Image
            resizeMode="cover"
            style={{
              height: 146,
              width: 100,
              borderRadius: 16,
              marginRight: 13,
              marginBottom: 18,
            }}
            source={
              item.poster_path
                ? {uri: `${env.IMAGE_HOST}${item.poster_path}`}
                : placeHolderImage
            }
          />
        )}
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export const TabViewMoview = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Now playing'},
    {key: 'second', title: 'Upcoming'},
    {key: 'third', title: 'Top rated'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: COLORS.lightGray,
            height: 4,
            width: 90,
            left: '5%',
          }}
          style={{backgroundColor: COLORS.background, marginBottom: 20}}
          renderLabel={({route, focused}) => (
            <Text
              style={{
                fontSize: 14,
                color: COLORS.white,
                fontWeight: focused ? 500 : 400,
              }}>
              {route.title}
            </Text>
          )}
        />
      )}
      style={{flex: 1}}
    />
  );
};
