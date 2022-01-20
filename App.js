import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { useFonts } from '@use-expo/font';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import CoursesScreen from './pages/CoursesScreen';
import BlogsScreen from './pages/BlogsScreen';
import BlogScreen from './pages/BlogScreen';
import CourseScreen from './pages/CourseScreen';
import { Directions } from 'react-native-gesture-handler';
import CoursesCatScreen from './pages/CourseCatScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const customFonts = {
  iranyekan: require('./assets/fonts/iranyekanwebregular.ttf'),
};
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: 'rgb(177, 108, 222)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

        // headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'SkillUp' }}
      />
      <Stack.Screen
        name="Course"
        component={CourseScreen}
        options={{
          title: 'دوره',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'iranyekan',
          },
        }}
      />
      <Stack.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          title: 'مقاله',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'iranyekan',
          },
        }}
      />
    </Stack.Navigator>
  );
}
function CourseStack() {
  return (
    <Stack.Navigator
      initialRouteName="Courses"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: 'rgb(177, 108, 222)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          title: 'دوره ها',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'iranyekan',
          },
        }}
      />
      <Stack.Screen
        name="Course"
        component={CourseScreen}
        options={{
          title: 'دوره',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'iranyekan',
          },
        }}
      />
      <Stack.Screen
        name="CourseCat"
        component={CoursesCatScreen}
        options={{
          title: 'دورهای دسته بندی',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'iranyekan',
          },
        }}
      />
    </Stack.Navigator>
  );
}
function BlogStack() {
  return (
    <Stack.Navigator
      initialRouteName="Blogs"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: 'rgb(177, 108, 222)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{
          title: 'مقالات',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'iranyekan' },
        }}
      />
      <Stack.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          title: 'مقاله',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'iranyekan',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(177, 108, 222)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={CoursesScreen}
        options={{ title: 'SkillUp' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'پروفایل',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'iranyekan',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  useFonts(customFonts);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="SkillUp"
          tabBarOptions={{
            activeTintColor: 'rgb(114, 9, 183)',
          }}
        >
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{
              tabBarLabel: 'پروفایل',
              headerShown: false,

              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="news"
            component={BlogStack}
            options={{
              tabBarLabel: 'بلاگ',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="post" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="CourseStack"
            component={CourseStack}
            options={{
              tabBarLabel: 'آموزش',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="video"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="SkillUp"
            component={HomeStack}
            options={{
              tabBarLabel: 'خانه',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
              tabBarLabelStyle: { fontFamily: 'iranyekan' },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    direction: 'ltr',
    flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
