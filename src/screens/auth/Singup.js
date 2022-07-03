import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ICONS, FONTS, IMAGES} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../Components/Button';
const {height, width} = Dimensions.get('screen');

export default function Singup(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />

      <LinearGradient
        style={{height, width}}
        colors={['#020AFF', '#23A3FF', '#2489D2', '#020EFF']}
        start={{x: 1.6, y: 0.1}}
        end={{x: -0.2, y: 1}}>
        <View style={{alignItems: 'center', marginTop: normalize(55)}}>
          <Image
            source={IMAGES.top_image}
            style={{
              height: normalize(110),
              width: '30%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginHorizontal: normalize(25),
            marginVertical: normalize(40),
            borderRadius: normalize(25),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: normalize(35),
              marginHorizontal: normalize(38),
            }}>
            <Button name="Sing Up " />
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: '#141414',
                  margin: normalize(5),
                  marginHorizontal: normalize(25),
                }}>
                Sing In
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{marginTop: normalize(18), marginHorizontal: normalize(30)}}>
            <Text style={{fontFamily: 'Poppins-SemiBold', color: '#141414'}}>
              Name
            </Text>
            <View
              style={{
                backgroundColor: '#F2F2F2',
                width: normalize(210),
                height: normalize(30),
                borderRadius: normalize(6),
              }}>
              <TextInput></TextInput>
            </View>

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#141414',
                marginTop: normalize(2),
              }}>
              E-mail / Phone no
            </Text>
            <View
              style={{
                backgroundColor: '#F2F2F2',
                width: normalize(210),
                height: normalize(30),
                borderRadius: normalize(6),
              }}>
              <TextInput></TextInput>
            </View>

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#141414',
                marginTop: normalize(2),
              }}>
              Password
            </Text>
            <View
              style={{
                backgroundColor: '#F2F2F2',
                width: normalize(210),
                height: normalize(30),
                borderRadius: normalize(6),
              }}>
              <TextInput></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              style={{alignSelf: 'center', marginTop: normalize(10)}}>
              <ImageBackground
                source={IMAGES.but2}
                style={{
                  width: normalize(180),
                  height: normalize(40),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    color: '#ffffff',
                    marginBottom: normalize(4),
                  }}>
                  Sing Up
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: '#141414',
                textAlign: 'center',
                marginVertical: normalize(8),
              }}>
              Continue With
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: normalize(80),
                marginBottom: normalize(30),
              }}>
              <Image source={IMAGES.google} style={{height: 30, width: 30}} />
              <Image source={IMAGES.fb} style={{height: 30, width: 30}} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
