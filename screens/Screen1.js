import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

const Screen1 = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Screen2');
    }, 2000);
  }, []);
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
        <Image
          source={require('../Assets/castingLogo.png')}
          style={{
            height: 90,
            width: 90,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: '30%',
          }}
        />
        <View style={{alignSelf: 'center', width: '70%', marginTop: 30}}>
          <Image
            source={require('../Assets/text.png')}
            style={{height: 40, width: '100%', resizeMode: 'center'}}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Text
            style={{
              color: '#ffeb99',
              fontSize: 24,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            The Results R In!
          </Text>
        </View>

        <View style={{marginTop: '25%', justifyContent: 'flex-end', zIndex: 1}}>
          <Image
            source={require('../Assets/girlClap.png')}
            style={{
              height: 300,
              width: 200,
              resizeMode: 'center',
              alignSelf: 'center',
            }}
          />
        </View>

        <View style={{height: 250, bottom: 115, justifyContent: 'flex-end'}}>
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

export default Screen1;

const styles = StyleSheet.create({});
