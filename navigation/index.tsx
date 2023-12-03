import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, MovieDetail, Search, WatchList} from '../screens';
import HomeIcon from '../svg/HomeIcon';
import SearchIcon from '../svg/SearchIcon';
import WatchListIcon from '../svg/WatchListIcon';
import {COLORS} from '../constants';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Favorite from '../assets/images/Favorite.svg';
import FavoriteAdded from '../assets/images/FavoriteAdded.svg';
import BackButton from '../assets/images/BackButton.svg';
import useMovies from '../store/moviesStore';
import {isAddedToWatchList} from '../utils/FilterMovies';

type RootTabParamList = {
  home: undefined;
  search: undefined;
  watchList: undefined;
};

export type RootStackParamList = {
  tab: undefined;
  detail: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const Header = () => (
  <View>
    <Text style={{fontSize: 16, fontWeight: '600', color: COLORS.darkWhite}}>
      Detail
    </Text>
  </View>
);

export const Navigation = () => {
  const {movieDetail, setWatchList, watchList, removeFromWatchList} =
    useMovies();
  const isAdded = isAddedToWatchList(movieDetail, watchList);
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="tab"
        component={BottomTab}
      />
      <Stack.Screen
        name="detail"
        options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: COLORS.background,
            borderBottomWidth: 0,
            borderBottomColor: COLORS.background,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{paddingRight: 24}}
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
          headerLeft: ({onPress, canGoBack}) =>
            canGoBack && (
              <View style={{paddingLeft: 12}}>
                <TouchableOpacity onPress={onPress}>
                  <BackButton />
                </TouchableOpacity>
              </View>
            ),
        }}
        component={MovieDetail}
      />
    </Stack.Navigator>
  );
};

export const BottomTab = () => {
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
