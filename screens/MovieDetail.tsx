import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useMovies, {movieDetailInitialData} from '../store/moviesStore';
import {COLORS, TRAILER_URL} from '../constants';
import env from 'react-native-config';
import {getMovieDetail, getMovieTrailerKey} from '../services/service';
import CalendarBlank from '../assets/images/CalendarBlank.svg';
import Divider from '../assets/images/Divider.svg';
import Clock from '../assets/images/Clock.svg';
import Ticket from '../assets/images/Ticket.svg';
import Play from '../assets/images/Play.svg';
import Star from '../assets/images/Star.svg';

export const MovieDetail = () => {
  const {movieDetail, setMovieDetail, movieId} = useMovies();
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    (async () => {
      const detail = (await getMovieDetail(movieId)) || movieDetailInitialData;
      setTrailerKey((await getMovieTrailerKey(detail.id)) || '');
      setMovieDetail(detail);
    })();
  }, [movieId, setMovieDetail]);

  if (movieDetail.id === -0) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={{backgroundColor: COLORS.background}}>
      <View style={{position: 'relative'}}>
        <Image
          resizeMode="cover"
          style={{
            height: 210.9,
            width: '100%',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            marginRight: 30.18,
            marginTop: 20,
          }}
          source={
            movieDetail.backdrop_path
              ? {uri: `${env.IMAGE_HOST}${movieDetail.backdrop_path}`}
              : placeHolderImage
          }
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            Linking.openURL(TRAILER_URL + trailerKey);
          }}>
          <Play />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 8.94,
            right: 11,
            flexDirection: 'row',
            backgroundColor: COLORS.background,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 8,
          }}>
          <Star />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '800',
              color: COLORS.orange,
              marginLeft: 4,
            }}>
            {movieDetail.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
      <View style={{top: -45}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="cover"
            style={{
              height: 120,
              width: 95,
              borderRadius: 16,
            }}
            source={
              movieDetail.poster_path
                ? {uri: `${env.IMAGE_HOST}${movieDetail.poster_path}`}
                : placeHolderImage
            }
          />
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
              fontWeight: '600',
              width: 210,
              marginLeft: 12,
            }}>
            {movieDetail.title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 37,
            marginTop: 24,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CalendarBlank />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: COLORS.textGray,
                marginLeft: 4,
              }}>
              {movieDetail.release_date.substring(0, 4)}
            </Text>
          </View>
          <Divider style={{marginHorizontal: 12}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Clock />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: COLORS.textGray,
                marginLeft: 4,
              }}>
              {movieDetail.runtime} Minutes
            </Text>
          </View>
          <Divider style={{marginHorizontal: 12}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ticket />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: COLORS.textGray,
                marginLeft: 4,
              }}>
              {movieDetail.genres[0].name || 'Unknown'}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLORS.white,
            lineHeight: 20,
            paddingLeft: 38,
            paddingRight: 20,
          }}>
          {movieDetail.overview}
        </Text>
      </View>
    </ScrollView>
  );
};
