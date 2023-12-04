import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, MovieDetail, Search, WatchList} from '../screens';
import {RootStackParamList, RootTabParamList} from './types';
import {useDetailOptions} from '../hooks/useDetailOptions';
import {
  useHomeTabOptions,
  useScreenOptions,
  useSearchTabOptions,
  useWatchListTabOptions,
} from '../hooks/useTabOptions';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const detailOptions = useDetailOptions();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="tab"
        component={BottomTab}
      />
      <Stack.Screen
        name="detail"
        options={detailOptions}
        component={MovieDetail}
      />
    </Stack.Navigator>
  );
};

export const BottomTab = () => {
  const homeTabOptions = useHomeTabOptions();
  const searchOptions = useSearchTabOptions();
  const watchListOptions = useWatchListTabOptions();
  const screenOptions = useScreenOptions();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen options={homeTabOptions} name="home" component={Home} />
      <Tab.Screen options={searchOptions} name="search" component={Search} />
      <Tab.Screen
        options={watchListOptions}
        name="watchList"
        component={WatchList}
      />
    </Tab.Navigator>
  );
};
