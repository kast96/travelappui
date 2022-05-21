import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Liked } from './components/Liked';
import colors from './assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Details } from './components/Details';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { discoverDataType } from './assets/data/discoverData';

MaterialCommunityIcons.loadFont()

const Stack = createNativeStackNavigator<RootStackParamList>()
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
	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await SplashScreen.preventAutoHideAsync()
				await Font.loadAsync({
					'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
					'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
				})
				await new Promise(resolve => setTimeout(resolve, 2000))
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	return (
		<View style={{flex: 1}} onLayout={onLayoutRootView}>
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
		</View>
	)
}

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	}
})


export type RootStackParamList = {
	Home: undefined
	Details: {
		item: discoverDataType
	}
	Tabnavigator: undefined
}