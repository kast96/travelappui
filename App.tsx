import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Liked } from './components/Liked';
import colors from './assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Details } from './components/Details';

MaterialCommunityIcons.loadFont()

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: colors.orange,
      tabBarInactiveTintColor: colors.gray,
      tabBarShowLabel: false
    }}>
      <Tab.Screen name={'Home'} component={Home} options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" size={32} color={color} />
        }} />
      <Tab.Screen name={'Liked'} component={Liked} options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="heart" size={32} color={color} />
        }} />
      <Tab.Screen name={'Profile'} component={Profile} options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={32} color={color} />
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Tabnavigator'} component={TabNavigator} options={{
          headerShown: false
        }} />
        <Stack.Screen name={'Details'} component={Details} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});
