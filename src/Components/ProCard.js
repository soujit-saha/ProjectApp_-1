import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, IMAGES} from '../themes/Themes';

const ProCard = props => {
  return (
    <View style={{marginTop: normalize(10), marginHorizontal: normalize(5)}}>
      <Image
        source={props.image}
        style={{width: normalize(65), height: normalize(100)}}
      />
      <Text
        style={{
          fontFamily: FONTS.Poppins_600,
          lineHeight: normalize(10),
          fontSize: normalize(7),
          color: COLORS.black,
          marginVertical: normalize(2),
        }}>
        Product
      </Text>
      <Text
        style={{
          fontFamily: FONTS.Poppins_500,
          lineHeight: normalize(8),
          fontSize: normalize(6),
          color: COLORS.black,
          marginBottom: normalize(7),
        }}>
        ₹ 599.00
      </Text>
    </View>
  );
};

export default ProCard;

const styles = StyleSheet.create({});
