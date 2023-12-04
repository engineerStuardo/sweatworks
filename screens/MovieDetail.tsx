import React, {useEffect, useState} from 'react';
import env from 'react-native-config';
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import useMovies, {movieDetailInitialData} from '../store/moviesStore';
import {COLORS, PLACEHOLDER_IMAGE, TRAILER_URL} from '../constants';
import {getMovieDetail, getMovieTrailerKey} from '../services/service';
import CalendarBlank from '../assets/images/CalendarBlank.svg';
import Divider from '../assets/images/Divider.svg';
import Clock from '../assets/images/Clock.svg';
import Ticket from '../assets/images/Ticket.svg';
import Play from '../assets/images/Play.svg';
import Star from '../assets/images/Star.svg';
import {ImageDetail} from '../components';

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
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            movieDetail.backdrop_path
              ? {uri: `${env.IMAGE_HOST}${movieDetail.backdrop_path}`}
              : {uri: PLACEHOLDER_IMAGE}
          }
        />
        <TouchableOpacity
          style={styles.playIcon}
          onPress={() => {
            Linking.openURL(TRAILER_URL + trailerKey);
          }}>
          <Play />
        </TouchableOpacity>
        <View style={styles.starIcon}>
          <Star />
          <Text style={styles.voteAverage}>
            {movieDetail.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.imageContainer}>
          <ImageDetail uri={movieDetail.poster_path} />
          <Text style={styles.title}>{movieDetail.title}</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.iconContainer}>
            <CalendarBlank />
            <Text style={styles.detail}>
              {movieDetail.release_date.substring(0, 4)}
            </Text>
          </View>
          <Divider style={styles.marginH} />
          <View style={styles.iconContainer}>
            <Clock />
            <Text style={styles.detail}>{movieDetail.runtime} Minutes</Text>
          </View>
          <Divider style={styles.marginH} />
          <View style={styles.iconContainer}>
            <Ticket />
            <Text style={styles.detail}>
              {movieDetail.genres[0].name || 'Unknown'}
            </Text>
          </View>
        </View>
        <Text style={styles.overview}>{movieDetail.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: COLORS.background,
  },
  container: {
    position: 'relative',
  },
  image: {
    height: 210.9,
    width: '100%',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginRight: 30.18,
    marginTop: 20,
  },
  playIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starIcon: {
    position: 'absolute',
    bottom: 8.94,
    right: 11,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  voteAverage: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.orange,
    marginLeft: 4,
  },
  bottomContainer: {
    top: -45,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '600',
    width: 210,
    marginLeft: 12,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 37,
    marginTop: 24,
  },
  detail: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textGray,
    marginLeft: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginH: {
    marginHorizontal: 12,
  },
  overview: {
    fontSize: 12,
    color: COLORS.white,
    lineHeight: 20,
    paddingLeft: 38,
    paddingRight: 20,
  },
});
