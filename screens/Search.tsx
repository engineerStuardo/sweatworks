import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSearch} from '../store/moviesStore';
import NoResults from '../assets/images/NoResults.svg';
import {COLORS} from '../constants';
import env from 'react-native-config';
import Star from '../assets/images/Star.svg';
import TicketWhite from '../assets/images/TicketWhite.svg';
import CalendarBlankWhite from '../assets/images/CalendarBlankWhite.svg';
import ClockWhite from '../assets/images/ClockWhite.svg';
import EmptyBox from '../assets/images/EmptyBox.svg';
import SearchIcon from '../assets/images/Search.svg';
import {getMoviesByTitle} from '../services/service';

export const Search = () => {
  const {searchResult, setSearchResult} = useSearch();
  const [search, setSearch] = useState('');

  if (searchResult.length === 0) {
    return (
      <View style={{backgroundColor: COLORS.background, flex: 1}}>
        <View
          style={{
            marginLeft: 32,
            marginRight: 36,
          }}>
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
            <TouchableOpacity
              onPress={() => {
                getMoviesByTitle(search, results => setSearchResult(results));
              }}>
              <SearchIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            flex: 0.75,
            justifyContent: 'center',
          }}>
          <NoResults />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: COLORS.watchListText,
              textTransform: 'capitalize',
              marginTop: 16,
            }}>
            we are sorry, we can{' '}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: COLORS.watchListText,
              textTransform: 'capitalize',
              marginBottom: 8,
            }}>
            not find the movie :(
          </Text>
          <Text
            style={{fontSize: 12, fontWeight: '500', color: COLORS.textGray}}>
            Find your movie by Type title,
          </Text>
          <Text
            style={{fontSize: 12, fontWeight: '500', color: COLORS.textGray}}>
            {' '}
            categories, years, etc{' '}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={{backgroundColor: COLORS.background, flex: 1}}>
      <View style={{marginLeft: 32, marginRight: 36}}>
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
          <TouchableOpacity
            onPress={() => {
              getMoviesByTitle(search, results => setSearchResult(results));
            }}>
            <SearchIcon />
          </TouchableOpacity>
        </View>
        <FlatList
          data={searchResult}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 24,
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
                      {/* {item.genres[0].name || 'Unknown'} */}
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
                      {/* {item.runtime} Minutes */}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <EmptyBox />
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.darkerWhite,
                  marginTop: 16,
                  marginBottom: 8,
                  fontWeight: '600',
                }}>
                There is no movie yet!
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.textGray,
                  width: 222,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                Find your movie by Type title, categories, years, etc{' '}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
