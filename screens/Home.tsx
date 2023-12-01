import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants';
import Search from '../assets/images/Search.svg';
import {Result, getPopularMovies} from '../services/service';
import {Svg, Text as SvgText} from 'react-native-svg';
import env from 'react-native-config';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [popularMovies, setPopularMovies] = useState<Result[]>([]);

  useEffect(() => {
    (async () => {
      const results = await getPopularMovies();
      setPopularMovies(results || []);
    })();
  }, []);

  if (popularMovies.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.background,
        flex: 1,
        paddingHorizontal: 24,
      }}>
      <Text style={{color: COLORS.white, fontSize: 18, fontWeight: '600'}}>
        What do you want to watch?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: COLORS.lightGray,
          paddingVertical: 10,
          paddingLeft: 24.7,
          borderRadius: 16,
          justifyContent: 'space-between',
          marginTop: 24,
          paddingRight: 14.82,
          marginBottom: 21,
        }}>
        <TextInput
          style={{color: COLORS.white, width: '90%'}}
          onChangeText={setSearch}
          value={search}
          placeholder="Search"
        />
        <Search />
      </View>
      <FlatList
        style={{paddingLeft: 20}}
        data={popularMovies}
        renderItem={({item, index}) => (
          <View>
            <Image
              resizeMode="cover"
              style={{
                height: 210,
                width: 144.61,
                borderRadius: 16,
                marginRight: 30.18,
              }}
              source={
                item.poster_path
                  ? {uri: `${env.IMAGE_HOST}${item.poster_path}`}
                  : placeHolderImage
              }
            />
            <View
              style={{position: 'absolute', zIndex: 1, top: 140, left: -25}}>
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
            {/* <Text
              style={{
                fontSize: 96,
                color: COLORS.background,
                textShadowColor: COLORS.blue,
                textShadowOffset: {width: 0, height: 0},
                textShadowRadius: 10,
                position: 'absolute',
                top: 130,
              }}>
              {index + 1}
            </Text> */}
          </View>
        )}
        horizontal
      />
    </SafeAreaView>
  );
};
