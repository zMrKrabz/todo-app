import {
	createBottomTabNavigator,
	createAppContainer}
	from 'react-navigation';
import TodoList from '../App';
import Settings from './Settings-Screen';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const Navigation=createBottomTabNavigator({
	Home: { screen: TodoList,
			tabBarIcon: <FontAwesome size={ 20 } name={ 'cogs' }/>},
	Settings: { screen: Settings,
				tabBarIcon: <FontAwesome size={ 20 } name={ 'cogs' }/> }
});

export default Navigation;