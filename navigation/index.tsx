import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search, WatchList} from '../screens';
import HomeIcon from '../svg/HomeIcon';
import SearchIcon from '../svg/SearchIcon';
import WatchListIcon from '../svg/WatchListIcon';
import {COLORS} from '../constants';

type RootTabParamList = {
  home: undefined;
  search: undefined;
  watchList: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          height: 90,
          borderTopColor: COLORS.blue,
          borderTopWidth: 1,
          paddingTop: 16,
        },
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color}) => (
            <HomeIcon color={color} focused={focused} />
          ),
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Search',
          tabBarIcon: ({focused, color}) => (
            <SearchIcon color={color} focused={focused} />
          ),
        }}
        name="search"
        component={Search}
      />
      <Tab.Screen
        options={{
          title: 'Watch List',
          tabBarIcon: ({focused, color}) => (
            <WatchListIcon color={color} focused={focused} />
          ),
        }}
        name="watchList"
        component={WatchList}
      />
    </Tab.Navigator>
  );
};
