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
import CourseCard from './../components/CourseCard';
import CategorySlider from './../components/CategorySlider';

import Design from '../assets/image/Illustraitors/design.svg';
import Seo from '../assets/image/Illustraitors/seo.svg';
import Programming from '../assets/image/Illustraitors/programming.svg';
import Frontdeveloper from '../assets/image/Illustraitors/frontdeveloper.svg';

const ENTRIES1 = [
  {
    title: 'برنامه نویسی پایتون',
    subtitle: 'توضیحات تکمیلی توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage.jpg'),
  },
  {
    title: 'آموزش کار با گوگل کنسول ابتداییتوضیحات تکمیلی ',
    subtitle: 'توضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage2.jpg'),
  },
  {
    title: 'کورس VueJS',
    subtitle: 'توضیحات تکمیلی توضیحات تکمیلیتوضیحات تکمیلیتوضیحات تکمیلی',
    illustration: require('../assets/image/BlogImage3.jpg'),
  },
  {
    title: 'آموزش کار با گوگل کنسول ابتدایی',
    subtitle: 'توضیحات تکمیلی توضیحات تکمیلی',
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
    title: 'فرانت دولوپرز',
    illustration: Frontdeveloper,
    color: '#4895EF',
  },
  {
    title: 'برنامه نویسی',
    illustration: Programming,
    color: '#FF9C1D',
  },
  {
    title: 'سئو و تولید محتوی',
    illustration: Seo,
    color: '#8FD01D',
  },
  {
    title: 'طراحی و یو آی',
    illustration: Design,
    color: '#DA3033',
  },
];
const CoursesScreen = ({ navigation }) => {
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
            <MyText mystyle={styles.devider}>دسته بندی</MyText>

            <CategorySlider
              entries={ENTRIES2}
              color="rgb(177, 108, 222,0.8)"
              handleClick={() => navigation.navigate('CourseCat')}
            />
            <CourseCard
              entries={ENTRIES1}
              btnname={'مشاهده دوره'}
              icon={'code'}
              handleClick={() => navigation.navigate('Course')}
            />
            <CourseCard
              entries={ENTRIES1}
              btnname={'مشاهده دوره'}
              icon={'code'}
              handleClick={() =>
                navigation.navigate({
                  screen: 'Course',
                  params: { name: 'Jane' },
                })
              }
            />
          </View>
          <MyText mystyle={styles.devider}>کورس های پر بازدید</MyText>
          <Slider
            entries={ENTRIES1}
            handleClick={() => navigation.navigate('Course')}
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

export default CoursesScreen;
