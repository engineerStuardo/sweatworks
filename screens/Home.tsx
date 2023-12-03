import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants';
import Search from '../assets/images/Search.svg';
import {getMovieDetail, getPopularMovies} from '../services/service';
import {Svg, Text as SvgText} from 'react-native-svg';
import env from 'react-native-config';
import {TabViewMoview} from '../navigation/TabView';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation';
import useMovies, {movieDetailInitialData} from '../store/moviesStore';

export const Home = () => {
  const {setMovies, popular, setMovieId} = useMovies();
  const [search, setSearch] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    (async () => {
      const results = (await getPopularMovies()) || [];
      setMovies(results, 'popular');
    })();
  }, [setMovies]);

  if (popular.length === 0) {
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
      <View style={{marginBottom: 24}}>
        <FlatList
          style={{paddingLeft: 20}}
          data={popular}
          contentContainerStyle={{marginBottom: 40}}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={async () => {
                setMovieId(item.id);
                navigation.navigate('detail');
              }}>
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
                style={{
                  position: 'absolute',
                  top: 140,
                  left: -25,
                }}>
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
      <TabViewMoview />
    </SafeAreaView>
  );
};
