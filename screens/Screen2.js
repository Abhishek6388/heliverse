import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

const Screen2 = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        source={require('../Assets/award_bg.png')}
        resizeMethod="resize"
        resizeMode="stretch"
        style={{height: '100%'}}>
        <View
          style={{
            marginTop: '30%',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../Assets/avtar2.png')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              borderColor: '#ffeb99',
              borderWidth: 1,
            }}
          />

          <View style={{marginLeft: 20}}>
            <Text style={{color: '#ffeb99', fontSize: 20, fontWeight: '800'}}>
              {' '}
              D-Lister
            </Text>
            <Text
              style={{
                color: '#ffeb99',
                fontSize: 15,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              {' '}
              Sally
            </Text>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <Text
            style={{
              color: '#ffeb99',
              fontSize: 24,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Gave U Some Love
          </Text>
        </View>
        <ImageBackground
          source={require('../Assets/main-heart.png')}
          resizeMode="center"
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
          }}>
          <View style={{zIndex: 1, top: '40%'}}>
            <Text
              style={{
                color: '#ffeb99',
                fontSize: 24,
                textAlign: 'center',
                fontWeight: '700',
              }}>
              15000
            </Text>
          </View>
        </ImageBackground>

        <View
          style={{justifyContent: 'center', zIndex: 1, flexDirection: 'row'}}>
          <Image
            source={require('../Assets/girlClap.png')}
            style={{
              height: 300,
              width: 200,
              resizeMode: 'center',
              alignSelf: 'center',
            }}
          />
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => {
              navigation.navigate('Screen3');
            }}>
            <Image
              source={require('../Assets/arrow.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{height: 200, bottom: 110, justifyContent: 'flex-end'}}>
          <Image
            source={require('../Assets/awardPlatform.png')}
            style={{
              alignSelf: 'center',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
