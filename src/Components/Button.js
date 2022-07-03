import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import normalize from '../utils/helpers/normalize';
import {IMAGES} from '../themes/Themes';

const Button = props => {
  return (
    <TouchableOpacity>
      {/* <LinearGradient
        style={{
          borderRadius: 43,
          width: normalize(100),
          height: normalize(30),
        }}
        colors={['#020AFF', '#2489D2', '#23A3FF', '#020EFF']}
        start={{x: 0.3, y: 1.9}}
        end={{x: 0.7, y: -0.9}}> */}
      <ImageBackground
        source={IMAGES.but1}
        style={{
          width: normalize(100),
          height: normalize(35),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            // marginHorizontal: normalize(27),
            // marginVertical: normalize(8),
            fontFamily: 'Poppins-SemiBold',
            color: '#ffffff',
            marginBottom: normalize(4),
          }}>
          {props.name}
        </Text>
      </ImageBackground>

      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
