import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import env from 'react-native-config';
import {COLORS} from '../constants';
import {
  Result,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../services/service';

const FirstRoute = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Result[]>([]);

  useEffect(() => {
    (async () => {
      setNowPlayingMovies((await getNowPlayingMovies()) || []);
    })();
  }, []);

  if (nowPlayingMovies.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={nowPlayingMovies}
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

const SecondRoute = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<Result[]>([]);

  useEffect(() => {
    (async () => {
      setUpcomingMovies((await getUpcomingMovies()) || []);
    })();
  }, []);

  if (upcomingMovies.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={upcomingMovies}
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
  const [topRatedMovies, setTopRatedMovies] = useState<Result[]>([]);

  useEffect(() => {
    (async () => {
      setTopRatedMovies((await getTopRatedMovies()) || []);
    })();
  }, []);

  if (topRatedMovies.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={topRatedMovies}
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
