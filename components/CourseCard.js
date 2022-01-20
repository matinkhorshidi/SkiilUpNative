import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import MyText from './MyText';

const CourseCard = (props) => {
  const { entries, handleClick, btnname, icon } = props;
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {entries.map((entry, index) => (
            <Card containerStyle={styles.cardbox}>
              <Card.Title>
                <Text style={{ fontFamily: 'iranyekan', fontSize: 17 }}>
                  {entry.title}
                </Text>
              </Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ marginBottom: 10, borderRadius: 10 }}
                source={entry.illustration}
              />
              <MyText style={{ marginBottom: 10 }}>{entry.subtitle}</MyText>
              <MyText style={{ marginBottom: 10 }}>{entry.subtitle}</MyText>
              <MyText style={{ marginBottom: 10 }}>{entry.subtitle}</MyText>
              <Button
                icon={
                  <Icon
                    name={icon}
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                buttonStyle={{
                  borderRadius: 3,
                  marginLeft: 0,
                  marginTop: 20,
                  marginRight: 0,
                  marginBottom: 0,
                  backgroundColor: 'rgb(181, 23, 158)',
                }}
                titleStyle={{ fontFamily: 'iranyekan', fontSize: 13 }}
                title={btnname}
                onPress={handleClick}
              />
            </Card>
          ))}
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
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  cardbox: {
    borderRadius: 10,
    marginBottom: 10,
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

export default CourseCard;
