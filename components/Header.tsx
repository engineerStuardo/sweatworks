import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {COLORS} from '../constants';

export const Header = ({title}: {title: string}) => (
  <View>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkWhite,
  },
});
