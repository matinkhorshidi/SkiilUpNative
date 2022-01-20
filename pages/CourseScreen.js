// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Slider from '../components/Slider';
import Masters from './../components/Masters';
import IconAvatars from './../components/IconAvatars';
import MyText from './../components/MyText';

const ENTRIES1 = [
  {
    title: 'برنامه نویسی پایتون',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage.jpg'),
  },
  {
    title: 'آموزش کار با گوگل کنسول ابتدایی',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage2.jpg'),
  },
  {
    title: 'کورس VueJS',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage3.jpg'),
  },
  {
    title: 'آموزش کار با گوگل کنسول ابتدایی',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage4.jpg'),
  },
  {
    title: 'برنامه نویسی پایتون',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage5.jpg'),
  },
];
const ENTRIES2 = [
  {
    title: 'آموزش کار با گوگل کنسول ابتدایی',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage.jpg'),
  },
  {
    title: 'پر درآمد ترین زبان های برنامه نویسی در سال 2021',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage2.jpg'),
  },
  {
    title: 'طراحی سایت با ادوب xd سال 2021',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage3.jpg'),
  },
  {
    title: 'آموزش کار با گوگل کنسول ابتدایی',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage4.jpg'),
  },
  {
    title: 'آموزش کار با گوگل کنسول ابتدایی',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage5.jpg'),
  },
];
const CourseScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#eaeaea', fontFamily: 'iranyekan' }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            //   alignItems: 'flex-end',
            //   justifyContent: 'center',
          }}
        >
          <View style={styles.subHeader}>
            <MyText
              size={25}
              mystyle={{
                marginTop: 10,
                marginRight: 40,
                textAlign: 'right',
                writingDirection: 'rtl',
              }}
            >
              مهارتهای جدید
            </MyText>
            <MyText
              mystyle={{
                fontSize: 25,
                // fontWeight: 'bold',
                marginLeft: 40,
                marginTop: -20,
                textAlign: 'left',
                color: '#7209b7',
                textShadowColor: '#000',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 1,
                marginBottom: 16,
              }}
            >
              یادگیری آسان
            </MyText>
          </View>
          <MyText mystyle={styles.devider}>کورس های اخیر</MyText>
          <Slider
            entries={ENTRIES1}
            handleClick={() => navigation.navigate('Course')}
          />
          <MyText mystyle={styles.devider}>اساتید اسکیلآپ</MyText>
          <Masters />
          <MyText mystyle={styles.devider}>بلاگ های اخیر</MyText>

          <Slider
            entries={ENTRIES2}
            handleClick={() => navigation.navigate('Blog')}
          />
        </View>
        <View
          style={{
            fontSize: 15,
            textAlign: 'center',
            backgroundColor: '#000',
            color: '#fff',
          }}
        >
          <ImageBackground
            source={require('../assets/image/Footer5.jpg')}
            resizeMode="cover"
            style={styles.image}
          >
            <MyText
              mystyle={{
                fontSize: 15,
                textAlign: 'center',
                color: '#fff',
                paddingVertical: 20,
              }}
            >
              ما را در شبکه های اجتماعی دنبال کنید
            </MyText>
            <IconAvatars />
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  subHeader: {
    //     backgroundColor: 'rgb(220, 124, 255)',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
  devider: {
    // backgroundColor: 'rgba(114, 9, 183,0.4)',
    fontSize: 18,
    color: '#000',
    textAlign: 'right',
    paddingVertical: 5,
    paddingRight: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CourseScreen;
