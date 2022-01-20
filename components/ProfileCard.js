import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import MyText from './MyText';

import MasterIcon from '../assets/image/Icons/MasterIcon.svg';
import VideoIcon from '../assets/image/Icons/video.svg';
import ClockIcon from '../assets/image/Icons/clock2.svg';
import GearIcon from '../assets/image/Icons/gear.svg';
import LayerIcon from '../assets/image/Icons/layer.svg';
import PriceIcon from '../assets/image/Icons/PriceTag.svg';
import Profile from './Profile';
import CourseCard from './CourseCard';

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
];

const ProfileCard = (props) => {
  const { post, handleClick, writer } = props;
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>
              <Text
                style={{
                  fontFamily: 'iranyekan',
                  textAlign: 'justify',
                  fontSize: 17,
                }}
              >
                {post.title}
              </Text>
            </Card.Title>
            <Card.Divider />
            <Profile />
            <View style={styles.user}>
              {/* <MasterIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}

              <Text style={styles.titr}>نام : </Text>
              <Text style={styles.name}>{post.master}</Text>
            </View>
            <View style={styles.user}>
              {/* <VideoIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>نام خانوادگی: </Text>
              <Text style={styles.name}>{post.videonum}</Text>
            </View>
            <View style={styles.user}>
              {/* <ClockIcon
                width={22}
                height={22}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>ایمیل: </Text>
              <Text style={styles.name}>{post.duration}</Text>
            </View>
            <View style={styles.user}>
              {/* <GearIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>شماره همراه: </Text>
              <Text style={styles.name}>{post.status}</Text>
            </View>
            <View style={styles.user}>
              {/* <LayerIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>رمز عبور: </Text>
              <Text style={styles.name}>{post.level}</Text>
            </View>

            <Text style={{ fontSize: 19, marginTop: 20 }}>دوره های شما</Text>
            <CourseCard
              entries={ENTRIES1}
              btnname={'مشاهده دوره'}
              icon={'code'}
              handleClick={() => navigation.navigate('Course')}
            />
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row-reverse',
    marginBottom: 6,
    marginLeft: 100,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  titr: {
    fontSize: 16,
    color: '#595959',
    marginTop: 5,
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardbox: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ProfileCard;
