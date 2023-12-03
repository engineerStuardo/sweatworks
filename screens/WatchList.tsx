import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useMovies from '../store/moviesStore';
import env from 'react-native-config';
import {COLORS} from '../constants';
import Star from '../assets/images/Star.svg';
import TicketWhite from '../assets/images/TicketWhite.svg';
import CalendarBlankWhite from '../assets/images/CalendarBlankWhite.svg';
import ClockWhite from '../assets/images/ClockWhite.svg';

export const WatchList = () => {
  const {watchList} = useMovies();
  return (
    <SafeAreaView style={{backgroundColor: '#242A32', flex: 1}}>
      <FlatList
        data={watchList}
        renderItem={({item}) => (
          <View
            style={{
              marginTop: 24,
              marginLeft: 32,
              flexDirection: 'row',
              marginRight: 36,
            }}>
            <Image
              resizeMode="cover"
              style={{
                height: 120,
                width: 95,
                borderRadius: 16,
              }}
              source={
                item.poster_path
                  ? {uri: `${env.IMAGE_HOST}${item.poster_path}`}
                  : placeHolderImage
              }
            />
            <View
              style={{
                marginLeft: 12,
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: '400',
                }}>
                {item.title}
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: COLORS.background,
                    borderRadius: 8,
                    marginBottom: 4,
                  }}>
                  <Star />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '800',
                      color: COLORS.orange,
                      marginLeft: 4,
                    }}>
                    {item.vote_average.toFixed(1)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 4,
                  }}>
                  <TicketWhite />
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.watchListText,
                      marginLeft: 4,
                    }}>
                    {item.genres[0].name || 'Unknown'}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 4,
                  }}>
                  <CalendarBlankWhite />
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.watchListText,
                      marginLeft: 4,
                    }}>
                    {item.release_date.substring(0, 4)}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <ClockWhite />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      color: COLORS.watchListText,
                      marginLeft: 4,
                    }}>
                    {item.runtime} Minutes
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
