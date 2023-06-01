import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Screen3 = ({navigation}) => {
  const [value, setValue] = useState(15000);

  let inc = () => {
    if(value >= 40000){
      return false
    }

    for(i= 15000; i< 25001; i++){
      setTimeout(() => {
        setValue(value + i)
      },500)
    }

  };

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
        <View style={{marginTop: '40%'}}>
          <Text
            style={{
              color: '#ffeb99',
              fontSize: 24,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            4 Friends Gave U
          </Text>
          <Text
            style={{
              color: '#ffeb99',
              fontSize: 24,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Some Love
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
              {value}
            </Text>
          </View>
        </ImageBackground>

        <View
          style={{justifyContent: 'center', zIndex: 1, flexDirection: 'row'}}>
          <Image
            source={require('../Assets/girlClap.png')}
            style={{
              marginLeft: 60,
              height: 300,
              width: 200,
              resizeMode: 'center',
            }}
          />
          <View style={{alignSelf: 'center'}}>
            <Image
              source={require('../Assets/2.png')}
              style={{height: 40, width: 100, bottom: '30%', right: 50}}
            />
            <TouchableOpacity
              onPress={() => {
                inc();
              }}>
              <Image
                source={require('../Assets/arrow.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
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

export default Screen3;

const styles = StyleSheet.create({});
