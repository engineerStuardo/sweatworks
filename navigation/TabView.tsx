import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLORS} from '../constants';
import {NowPlaying} from '../components/NowPlaying';
import {Upcoming} from '../components/Upcoming';
import {TopRated} from '../components/TopRated';

const renderScene = SceneMap({
  nowPlaying: NowPlaying,
  upcoming: Upcoming,
  topRated: TopRated,
});

export const TabViewMoview = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'nowPlaying', title: 'Now playing'},
    {key: 'upcoming', title: 'Upcoming'},
    {key: 'topRated', title: 'Top rated'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicatorStyle}
          style={styles.tabBar}
          renderLabel={({route, focused}) => (
            <Text
              style={{
                ...styles.title,
                fontWeight: focused ? 500 : 400,
              }}>
              {route.title}
            </Text>
          )}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: COLORS.lightGray,
    height: 4,
    width: 90,
    left: '5%',
  },
  tabBar: {
    backgroundColor: COLORS.background,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    color: COLORS.white,
  },
});
