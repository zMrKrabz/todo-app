import {
	createBottomTabNavigator,
	createAppContainer,
	createStackNavigator,
	SwitchNavigator}
	from 'react-navigation';
import TodoList from './todo-list';
import Settings from './Settings-Screen';
import { FontAwesome } from '@expo/vector-icons';
import React, { Component } from 'react';

const BottomTabNavigator=createBottomTabNavigator({
	TodoList: { screen: TodoList,
			tabBarIcon: <FontAwesome size={ 20 } name={ 'cogs' }/>},
	Settings: { screen: Settings,
				tabBarIcon: <FontAwesome size={ 20 } name={ 'cogs' }/> }
}, {
	tabBarOptions: {
		labelStyle: {
			fontSize: 14
		}
	}
});

/* 
const StackNavigator = createStackNavigator({
		TodoList, BottomTabNavigator
	},
	{
		initialRouteName: 'TODOs'
	}
);

const RootStack = createStackNavigator(
	{
		Main: {
			screen: StackNavigator
		}
	},
	{
		mode: 'modal',
		headerMode: 'none'
	}
)
*/

const AppContainer = createAppContainer(BottomTabNavigator);
export default AppContainer;

/*
export default class App extends Component {
	render() {
		return (
			<AppContainer />
		)
	}
}
*/