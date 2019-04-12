import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	Text,
	View,
	FlatList,
	AsyncStorage,
	Button,
	TextInput,
	Keyboard,
	Platform
 } from 'react-native';
 import Navigation from './Navigator';
 let exports = module.exports = {};

 exports.Settings = class Settings extends Component {
	 state = {
		 tasks: []
	 };

	 render() {
		 return (
			 <View style={{ flex: 1 }}>
				 <Text>Hello Settings</Text>
				 <Navigation />
			 </View>
		 )
	 }

 }

 AppRegistry.registerComponent("Settings", () => Settings);