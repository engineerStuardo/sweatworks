import React from 'react';
import {Image, StyleSheet} from 'react-native';
import env from 'react-native-config';
import {PLACEHOLDER_IMAGE} from '../constants';

interface Props {
  uri: string;
}

export const ImageDetail = ({uri}: Props) => {
  return (
    <Image
      resizeMode="cover"
      style={styles.image}
      source={{uri: uri ? `${env.IMAGE_HOST}${uri}` : PLACEHOLDER_IMAGE}}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 95,
    borderRadius: 16,
  },
});
