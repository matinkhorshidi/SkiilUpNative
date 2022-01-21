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
    id: 2,
    topics: [
      {
        id: 2,
        name: 'تولید محتوا و سئو',
        color: '#8fd01d',
      },
    ],
    teacher: 'دکتر جزایری',
    title: 'آموزش کار با کنسول',
    subtitle: 'توضیحات تکمیلی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n\r\n\r\nبرنامه نویس پیرتر یا جوان تر؟\r\nلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    image: require('../assets/image/BlogImage.jpg'),
    cost: 100000,
    creation_date: '2022-01-15',
    status: 2,
    difficulty: 3,
    duration: 471,
    offer: 100,
    rate: '0',
  },
  {
    id: 3,
    topics: [
      {
        id: 4,
        name: 'فرانت دولوپرز',
        color: '#4895ef',
      },
    ],
    teacher: 'دکتر جزایری',
    subtitle: 'توضیحات تکمیلی',
    title: 'برنامه نویسی جاوا اسکریپت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n\r\n\r\nبرنامه نویس پیرتر یا جوان تر؟\r\nلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    cost: 120000,
    creation_date: '2022-01-15',
    status: 3,
    difficulty: 1,
    duration: 59,
    image: require('../assets/image/BlogImage2.jpg'),
    offer: 80,
    rate: '0',
  },
  {
    id: 4,
    topics: [
      {
        id: 3,
        name: 'طراحی و یوآی',
        color: '#da3033',
      },
    ],
    teacher: 'دکتر جزایری',
    title: 'آموزش VueJS',
    subtitle: 'توضیحات تکمیلی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n\r\n\r\nبرنامه نویس پیرتر یا جوان تر؟\r\nلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    cost: 200000,
    creation_date: '2022-01-15',
    status: 1,
    difficulty: 3,
    duration: 300,
    image: require('../assets/image/BlogImage3.jpg'),
    offer: 100,
    rate: '3',
  },
];

const ProfileCard = (props, navigation) => {
  const { user, onClick } = props;
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
                {user.title}
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
              <Text style={styles.name}>{user.master}</Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.titr}>نام خانوادگی: </Text>
              <Text style={styles.name}>{user.videonum}</Text>
            </View>
            <View style={styles.user}>
              {/* <ClockIcon
                width={22}
                height={22}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>ایمیل: </Text>
              <Text style={styles.name}>{user.duration}</Text>
            </View>
            <View style={styles.user}>
              {/* <GearIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>شماره همراه: </Text>
              <Text style={styles.name}>{user.status}</Text>
            </View>
            <View style={styles.user}>
              {/* <LayerIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>رمز عبور: </Text>
              <Text style={styles.name}>{user.level}</Text>
            </View>

            <Text style={{ fontSize: 19, marginTop: 20 }}>دوره های شما</Text>
            <CourseCard
              entries={ENTRIES1}
              btnname={'مشاهده دوره'}
              icon={'code'}
              handleClick={(post) => onClick(post)}
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
