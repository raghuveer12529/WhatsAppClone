import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { Entypo } from '@expo/vector-icons';
// import { useRoute } from '@react-navigation/native';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  // const route = useRoute();
  console.log("Raghu"+route.params);

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.dark.background
      }
    }}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        
        options={{
          title: 'Raghuveer\'s App',
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 15
            }}>
              <Feather name="search" size={20} color="white" />
              <Ionicons name="md-settings-outline" size={20} color="white" />
            </View>
          )
        }}
      />

<Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        
        options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 15
            }}>
              <Feather name="video" size={20} color="white" />
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          ),
          headerLeft:()=>(
            <View>
              {/* <Image source={route.params.imageUri} /> */}
            </View>
            
          )
        })}
      />


      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
    </Stack.Navigator>
  );
}
