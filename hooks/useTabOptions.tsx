import React from 'react';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import HomeIcon from '../svg/HomeIcon';
import {Header} from '../components';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';
import SearchIcon from '../assets/images/Search.svg';
import Info from '../assets/images/Info.svg';
import WatchListIcon from '../svg/WatchListIcon';

interface Props {
  focused: boolean;
  color: string;
}

export const useHomeTabOptions = () => {
  const homeOptions = {
    title: 'Home',
    tabBarIcon: ({focused, color}: Props) => (
      <HomeIcon color={color} focused={focused} />
    ),
  };

  return homeOptions as BottomTabNavigationOptions;
};

export const useSearchTabOptions = () => {
  const searchOptions = {
    title: 'Search',
    headerTitle: () => <Header title="Search" />,
    tabBarIcon: ({focused, color}: Props) => (
      <SearchIcon color={color} focused={focused} />
    ),
    headerShown: true,
    headerTintColor: COLORS.white,
    headerStyle: styles.tabBarSearchStyle,
    headerRight: () => (
      <TouchableOpacity style={styles.paddingRight}>
        <Info />
      </TouchableOpacity>
    ),
  };

  return searchOptions as BottomTabNavigationOptions;
};

export const useWatchListTabOptions = () => {
  const watchListOptions = {
    title: 'Watch List',
    tabBarIcon: ({focused, color}: Props) => (
      <WatchListIcon color={color} focused={focused} />
    ),
    headerShown: true,
    headerTintColor: COLORS.white,
    headerStyle: styles.watchListHeader,
  };

  return watchListOptions as BottomTabNavigationOptions;
};

export const useScreenOptions = () => {
  const screenOptions = {
    headerShown: false,
    tabBarStyle: styles.tabBar,
    tabBarActiveTintColor: COLORS.blue,
    tabBarInactiveTintColor: COLORS.gray,
    tabBarLabelStyle: styles.tabBarLabelStyle,
  };

  return screenOptions as BottomTabNavigationOptions;
};

const styles = StyleSheet.create({
  paddingRight: {
    paddingRight: 24,
  },
  tabBarSearchStyle: {
    backgroundColor: COLORS.background,
    borderBottomWidth: 0,
    borderBottomColor: COLORS.background,
    elevation: 0,
    shadowOpacity: 0,
  },
  watchListHeader: {
    backgroundColor: COLORS.background,
    borderBottomWidth: 0,
    borderBottomColor: COLORS.background,
    elevation: 0,
    shadowOpacity: 0,
  },
  tabBar: {
    backgroundColor: COLORS.background,
    height: 90,
    borderTopColor: COLORS.blue,
    borderTopWidth: 1,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '500',
  },
});
