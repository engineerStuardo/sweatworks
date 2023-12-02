import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search, WatchList} from '../screens';
import HomeIcon from '../svg/HomeIcon';
import SearchIcon from '../svg/SearchIcon';
import WatchListIcon from '../svg/WatchListIcon';
import {COLORS} from '../constants';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Favorite from '../assets/images/Favorite.svg';
import BackButton from '../assets/images/BackButton.svg';

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

const Detail = () => {
  return (
    <ScrollView style={{backgroundColor: COLORS.background}}>
      <Text>details</Text>
    </ScrollView>
  );
};

const Header = () => (
  <View>
    <Text style={{fontSize: 16, fontWeight: '600', color: COLORS.darkWhite}}>
      Detail
    </Text>
  </View>
);

export const Navigation = () => {
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
            <View style={{paddingRight: 24}}>
              <Favorite />
            </View>
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
        component={Detail}
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
