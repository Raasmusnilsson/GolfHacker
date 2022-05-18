import React from 'react'
import {
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
} from '@expo/vector-icons'
import AppStyles from '../styles/AppStyles'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../components/screens/HomeScreen'
import LoginScreen from '../components/screens/LoginScreen'
import ProfileScreen from '../components/screens/ProfileScreen'
import SettingsScreen from '../components/screens/SettingsScreen'
import ScoreCardScreen from '../components/screens/ScoreCardScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const ProfileStackScreen = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Profil Sida" component={ProfileScreen} />
			<Stack.Screen name="Inställningar" component={SettingsScreen} />
		</Stack.Navigator>
	)
}

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Hem"
			screenOptions={{
				headerShown: false,
				tabBarInactiveBackgroundColor: '#96C2A8',
				tabBarActiveBackgroundColor: '#96C2A8',
				tabBarActiveTintColor: 'white',
				tabBarLabelStyle: {
					borderTopWidth: 0,
					elevation: 0,
					marginTop: -8,
					paddingBottom: 5,
					fontSize: 12,
				},
			}}
		>
			<Tab.Screen
				name="Login"
				component={LoginScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialIcons
							name="login"
							size={24}
							color={focused ? 'white' : 'grey'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Hem"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name="md-home-outline"
							size={24}
							color={focused ? 'white' : 'grey'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Scorecard"
				component={ScoreCardScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name="scoreboard-outline"
							size={24}
							color={focused ? 'white' : 'grey'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profil"
				component={ProfileStackScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name="person-outline"
							size={24}
							color={focused ? 'white' : 'grey'}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<BottomTabNavigator />
		</NavigationContainer>
	)
}
