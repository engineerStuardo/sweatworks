import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import env from 'react-native-config';
import {Svg, Text as SvgText} from 'react-native-svg';
import {COLORS, PLACEHOLDER_IMAGE} from '../constants';
import {Result} from '../services/service';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import useMovies from '../store/moviesStore';

interface Props {
  popular: Result[];
}

export const HorizontalList = ({popular}: Props) => {
  const {setMovieId} = useMovies();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListStyles}
        data={popular}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={async () => {
              setMovieId(item.id);
              navigation.removeListener;
              navigation.navigate('detail');
            }}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={
                item.poster_path
                  ? {uri: `${env.IMAGE_HOST}${item.poster_path}`}
                  : {uri: PLACEHOLDER_IMAGE}
              }
            />
            <View style={styles.numberStyle}>
              <Svg height="96" width="200">
                <SvgText
                  x="10"
                  y="90"
                  fontSize="96"
                  fontWeight={900}
                  fill={COLORS.background}
                  stroke={COLORS.blue}
                  strokeWidth="1">
                  {index + 1}
                </SvgText>
              </Svg>
            </View>
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  flatListStyles: {
    paddingLeft: 20,
  },
  contentContainerStyle: {
    marginBottom: 40,
  },
  image: {
    height: 210,
    width: 144.61,
    borderRadius: 16,
    marginRight: 30.18,
  },
  numberStyle: {
    position: 'absolute',
    top: 140,
    left: -25,
  },
});
