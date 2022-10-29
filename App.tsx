/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import HomeSection from './components/Home';
import ProfileSection from './components/Profile';
import SettingsSection from './components/Settings';
import AboutSection from './components/About';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/FontAwesome';

const TabMenu = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeSection}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="rocket" size={30} color="gray" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileSection}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Icon name="user" size={30} color="gray" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsSection}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <Icon name="cog" size={30} color="gray" />,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutSection}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: () => <Icon name="info" size={30} color="gray" />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TabMenu />
    </NavigationContainer>
  );
};

export default App;
