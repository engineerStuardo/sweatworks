import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import EmptyBox from '../assets/images/EmptyBox.svg';
import {COLORS} from '../constants';

export const WatchListEmpty = () => {
  return (
    <View style={styles.container}>
      <EmptyBox />
      <Text style={styles.title}>There is no movie yet!</Text>
      <Text style={styles.subtitle}>
        Find your movie by Type title, categories, years, etc{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: COLORS.darkerWhite,
    marginTop: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textGray,
    width: 222,
    fontWeight: '500',
    textAlign: 'center',
  },
});
