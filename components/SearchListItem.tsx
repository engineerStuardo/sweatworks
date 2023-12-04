import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ImageDetail} from './ImageDetail';
import {COLORS} from '../constants';
import Star from '../assets/images/Star.svg';
import TicketWhite from '../assets/images/TicketWhite.svg';
import CalendarBlankWhite from '../assets/images/CalendarBlankWhite.svg';
import ClockWhite from '../assets/images/ClockWhite.svg';

interface Props {
  posterPath: string;
  title: string;
  releaseDate: string;
  voteAverage: number;
  genre?: string;
  runtime?: number;
}

export const SearchListItem = ({
  posterPath,
  title,
  releaseDate,
  voteAverage,
  genre,
  runtime,
}: Props) => {
  return (
    <View style={styles.container}>
      <ImageDetail uri={posterPath} />
      <View style={styles.innerContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View>
          <View style={styles.starContainer}>
            <Star />
            <Text style={styles.voteAverage}>{voteAverage.toFixed(1)}</Text>
          </View>
          <View style={styles.lineContainer}>
            <TicketWhite />
            <Text style={styles.releaseDate}>{genre || 'Unknown'}</Text>
          </View>
          <View style={styles.lineContainer}>
            <CalendarBlankWhite />
            <Text style={styles.releaseDate}>
              {releaseDate.substring(0, 4)}
            </Text>
          </View>
          <View style={styles.minutesContainer}>
            <ClockWhite />
            <Text style={styles.releaseDate}>
              {runtime || 'Unknown'} Minutes
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  innerContainer: {
    marginLeft: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '400',
  },
  starContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    borderRadius: 8,
    marginBottom: 4,
  },
  voteAverage: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.orange,
    marginLeft: 4,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 12,
    color: COLORS.watchListText,
    marginLeft: 4,
  },
  minutesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
