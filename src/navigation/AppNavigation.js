import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../component/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PasswordScreen from '../screens/PasswordScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import StatisticsScreen from '../screens/StatisticScreen';
import ActivityScreen from '../screens/ActivityScreen';
// the hook
import { useTranslation } from 'react-i18next';

const Tabs = AnimatedTabBarNavigator()

const TabBarIcon = props => {
	return (
		<Icon
			name={props.name}
			size={props.size ? props.size : 24}
			color={props.tintColor}
		/>
	)
}

const AppNavigation = ({navigation}) => {
	const { t, i18n } = useTranslation();
	return (
		<Tabs.Navigator initialRouteName={t('tabBottom_home')}
		tabBarOptions={{
			activeTintColor: '#fff',
			inactiveTintColor: '#fff',
			activeBackgroundColor: '#44caac', //#9257AA
		}}
		appearence={{
			tabBarBackground: '#000', //'#201f23'
			activeColor: '#fff',
			dotCornerRadius: 44,
			// floating: true,
			topPadding: 22,
			bottomPadding: 22,
		}}
		>
			<Tabs.Screen
				name={t('tabBottom_home')}
				component={StackHome}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon
							focused={focused}
							tintColor={color}
							name="grid"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name={t('tabBottom_activity')}
				component={StackActivity}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<TabBarIcon
							focused={focused}
							tintColor={color}
							name="activity"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name={t('tabBottom_diary')}
				component={StackStatistic}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon
							focused={focused}
							tintColor={color}
							name="calendar"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name={t('tabBottom_profile')}
				component={StackProfile}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon
							focused={focused}
							tintColor={color}
							name="user"
						/>
					),
				}}
			/>
		</Tabs.Navigator>
	)
}

export default AppNavigation

const HomeStack = createStackNavigator()

function StackHome({ navigation }) {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </HomeStack.Navigator>
    )
}

const ActivityStack = createStackNavigator()

function StackActivity({ navigation, route }) {
    return (
        <ActivityStack.Navigator initialRouteName="Activity">
            <ActivityStack.Screen name="Activity" component={ActivityScreen}
                options={{
                    headerShown: false,
                }}
            />
        </ActivityStack.Navigator>
        
    )
}

const StatisticStack = createStackNavigator()

function StackStatistic({ navigation }) {
    return (
        <StatisticStack.Navigator initialRouteName="Statistics">
            <StatisticStack.Screen name="Statistics" component={StatisticsScreen}
                options={{
                    headerShown: false,
                }}
            />
        </StatisticStack.Navigator>
    )
}

const ProfileStack = createStackNavigator()

function StackProfile({ navigation }) {
    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false
                }}
            />
            <ProfileStack.Screen name="EditProfile" component={EditProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
            <ProfileStack.Screen name="ChangePassword" component={PasswordScreen}
                options={{
                    headerShown: false,
                }}
            />
        </ProfileStack.Navigator>
    )
}

const styles = StyleSheet.create({

})
