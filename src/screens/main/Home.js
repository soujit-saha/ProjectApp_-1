import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, ICONS, IMAGES} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import Carousel from 'react-native-snap-carousel';
import Card from '../../Components/Card';
import ProCard from '../../Components/ProCard';
const {height, width} = Dimensions.get('screen');

const newArrivals = [
  {image: IMAGES.flat1},
  {image: IMAGES.flat2},
  {image: IMAGES.flat3},
  {image: IMAGES.flat4},
];

const slide = [
  {image: IMAGES.slide1},
  {image: IMAGES.slide2},
  {image: IMAGES.slide3},
];

const newFas = [
  {image: IMAGES.fas1},
  {image: IMAGES.fas2},
  {image: IMAGES.fas3},
  {image: IMAGES.fas4},
  {image: IMAGES.fas5},
  {image: IMAGES.fas6},
];

const newPro = [
  {image: IMAGES.pro1},
  {image: IMAGES.pro2},
  {image: IMAGES.pro3},
  {image: IMAGES.pro4},
  {image: IMAGES.pro5},
  {image: IMAGES.pro6},
  {image: IMAGES.pro7},
  {image: IMAGES.pro8},
];

const Home = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <ScrollView>
        <View
          style={{
            marginTop: StatusBar.currentHeight,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: normalize(20),
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: normalize(30),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IMAGES.logo}
              style={{height: normalize(15), width: normalize(15)}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#141414',
                fontSize: normalize(18),
                lineHeight: normalize(25),
                paddingHorizontal: normalize(10),
              }}>
              eMarket
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: normalize(30),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={IMAGES.search}
                style={{
                  height: normalize(18),
                  width: normalize(21),
                  marginHorizontal: normalize(10),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={IMAGES.bell}
                style={{height: normalize(22), width: normalize(22)}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ImageBackground
            source={IMAGES.cover}
            imageStyle={{
              height: '100%',
              resizeMode: 'contain',
            }}
            style={{
              height: normalize(150),
              // width: width,
            }}></ImageBackground>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: normalize(10),
              lineHeight: normalize(15),
              letterSpacing: normalize(1.5),
              color: '#000000',
              marginBottom: normalize(8),
              marginTop: normalize(-5),
            }}>
            Categories
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={IMAGES.all}
              style={{height: normalize(31), width: normalize(31)}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: normalize(7),
                lineHeight: normalize(8),
                marginVertical: normalize(6),
                color: '#000000',
              }}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={IMAGES.all2}
              style={{height: normalize(31), width: normalize(31)}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: normalize(7),
                lineHeight: normalize(8),
                marginVertical: normalize(6),
                color: '#000000',
              }}>
              Top Offers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={IMAGES.all3}
              style={{height: normalize(30), width: normalize(31)}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: normalize(7),
                lineHeight: normalize(8),
                marginVertical: normalize(6),
                color: '#000000',
              }}>
              Mobile & Comp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={IMAGES.all4}
              style={{height: normalize(31), width: normalize(31)}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: normalize(7),
                lineHeight: normalize(8),
                marginVertical: normalize(6),
                color: '#000000',
              }}>
              Electronic
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={IMAGES.all5}
              style={{height: normalize(30), width: normalize(30)}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: normalize(7),
                lineHeight: normalize(8),
                marginVertical: normalize(6),
                color: '#000000',
              }}>
              Fashion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={IMAGES.all6}
              style={{height: normalize(30), width: normalize(31)}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: normalize(7),
                lineHeight: normalize(8),
                marginVertical: normalize(6),
                color: '#000000',
              }}>
              Furniture
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            data={newArrivals}
            ListHeaderComponent={() => {
              return (
                <View
                  style={{
                    height: normalize(50),
                    width: normalize(70),
                    justifyContent: 'center',
                    // alignItems: 'center',
                    marginLeft: normalize(15),
                    marginVertical: normalize(20),
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.Poppins_600,
                      fontSize: normalize(10),
                      color: COLORS.black,
                    }}>
                    New{'\n'}
                    <Text
                      style={{
                        fontSize: normalize(15),
                      }}>
                      Arrivals
                    </Text>
                  </Text>
                </View>
              );
            }}
            renderItem={({item}) => {
              return (
                <Image
                  source={item.image}
                  style={{
                    height: normalize(63),
                    width: normalize(65),
                    marginHorizontal: normalize(3),
                    marginVertical: normalize(20),
                  }}
                />
              );
            }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: normalize(20),
            }}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_600,
                fontSize: normalize(10),
                letterSpacing: 1.5,
                color: COLORS.black,
                lineHeight: normalize(16),
              }}>
              Fashion
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: FONTS.Poppins_600,
                  fontSize: normalize(7),

                  color: COLORS.black,
                  lineHeight: normalize(12),
                }}>
                View More
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              style={{marginHorizontal: 20}}
              numColumns={3}
              data={newFas}
              renderItem={({item}) => {
                return <Card image={item.image} />;
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              // backgroundColor: 'black',
              height: normalize(220),
              width: normalize(150),
              padding: normalize(10),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // width: normalize(130),
                marginVertical: normalize(18),
              }}>
              <View>
                <Image
                  source={IMAGES.wid1}
                  style={{
                    width: normalize(62),
                    height: normalize(64),
                  }}
                />
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_600,
                    lineHeight: normalize(10),
                    fontSize: normalize(6),
                    color: COLORS.black,
                  }}>
                  Product
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_500,
                    lineHeight: normalize(8),
                    fontSize: normalize(5),
                    color: COLORS.black,
                  }}>
                  ₹ 599.00
                </Text>
              </View>

              <View>
                <Image
                  source={IMAGES.wid2}
                  style={{
                    width: normalize(62),
                    height: normalize(64),
                  }}
                />
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_600,
                    lineHeight: normalize(10),
                    fontSize: normalize(6),
                    color: COLORS.black,
                  }}>
                  Product
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_500,
                    lineHeight: normalize(8),
                    fontSize: normalize(5),
                    color: COLORS.black,
                  }}>
                  ₹ 599.00
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image
                  source={IMAGES.wid3}
                  style={{
                    width: normalize(62),
                    height: normalize(64),
                  }}
                />
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_600,
                    lineHeight: normalize(10),
                    fontSize: normalize(6),
                    color: COLORS.black,
                  }}>
                  Product
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_500,
                    lineHeight: normalize(8),
                    fontSize: normalize(5),
                    color: COLORS.black,
                  }}>
                  ₹ 599.00
                </Text>
              </View>
              <View>
                <Image
                  source={IMAGES.wid4}
                  style={{
                    width: normalize(62),
                    height: normalize(64),
                  }}
                />
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_600,
                    lineHeight: normalize(10),
                    fontSize: normalize(6),
                    color: COLORS.black,
                  }}>
                  Product
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_500,
                    lineHeight: normalize(8),
                    fontSize: normalize(5),
                    color: COLORS.black,
                  }}>
                  ₹ 599.00
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: normalize(220),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IMAGES.group2}
              style={{
                width: normalize(130),
                height: normalize(190),
              }}
            />
          </View>
        </View>

        <View>
          <Carousel
            data={slide}
            sliderWidth={width}
            layout="default"
            itemWidth={normalize(150)}
            loop
            inactiveSlideScale={0.85}
            inactiveSlideOpacity={1}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      height: normalize(140),
                      width: normalize(155),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: normalize(15),
            }}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_600,
                fontSize: normalize(10),
                letterSpacing: 1.5,
                color: COLORS.black,
                lineHeight: normalize(16),
              }}>
              Top Products
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: FONTS.Poppins_600,
                  fontSize: normalize(7),

                  color: COLORS.black,
                  lineHeight: normalize(12),
                }}>
                View More
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              style={{marginHorizontal: 20}}
              numColumns={4}
              data={newPro}
              renderItem={({item}) => {
                return <ProCard image={item.image} />;
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
