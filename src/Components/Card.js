import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, IMAGES} from '../themes/Themes';

const Card = props => {
  return (
    <View style={{marginTop: normalize(10), marginHorizontal: normalize(3)}}>
      <Image
        source={props.image}
        style={{width: normalize(90), height: normalize(110)}}
      />
      <Text
        style={{
          fontFamily: FONTS.Poppins_500,
          lineHeight: normalize(20),
          fontSize: normalize(14),
          color: COLORS.black,
          marginVertical: normalize(2),
        }}>
        The Product
      </Text>
      <Text
        style={{
          fontFamily: FONTS.Poppins_500,
          lineHeight: normalize(11),
          fontSize: normalize(8),
          color: COLORS.black,
          marginBottom: normalize(7),
        }}>
        ₹ 599.00
      </Text>
      <TouchableOpacity>
        <LinearGradient
          style={{
            borderRadius: 4,
            width: normalize(90),
            height: normalize(30),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          colors={['#2992E3', '#0F0AA4']}
          start={{x: 0.9, y: -0.5}}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_600,
              lineHeight: normalize(15),
              fontSize: normalize(10),
              color: '#ffffff',
            }}>
            Add to cart
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
