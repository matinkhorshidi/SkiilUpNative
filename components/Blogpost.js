import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import MyText from './MyText';

const Blogpost = (props) => {
  const { entries, handleClick } = props;
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {entries.map((entry, index) => (
            <Card containerStyle={styles.cardbox}>
              <Card.Title>
                <Text
                  style={{
                    fontFamily: 'iranyekan',
                    textAlign: 'justify',
                    fontSize: 17,
                  }}
                >
                  {entry.title}
                </Text>
              </Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ marginBottom: 10, borderRadius: 10 }}
                source={entry.illustration}
              />
              <MyText
                mystyle={{
                  marginBottom: 10,
                  textAlign: 'justify',
                }}
              >
                {entry.subtitle}
              </MyText>
              <MyText
                mystyle={{
                  marginBottom: 10,
                  textAlign: 'justify',
                }}
              >
                {entry.subtitle}
              </MyText>

              <Button
                icon={
                  <Icon
                    name="code"
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginTop: 20,
                  marginRight: 0,
                  marginBottom: 0,
                  backgroundColor: 'rgba(181, 23, 158,0.0)',
                }}
                titleStyle={{
                  fontFamily: 'iranyekan',
                  fontSize: 13,
                  color: 'rgba(181, 23, 158,0.7)',
                }}
                title="نویسنده :"
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

export default Blogpost;
