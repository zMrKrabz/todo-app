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

export default class Settings extends Component {
	 state = {
		 tasks: []
	 };

	 render() {
		 return (
			 <View style={{ flex: 1 }}>
				 <Text>Hello Settings</Text>
			 </View>
		 )
	 }

 }

 AppRegistry.registerComponent("Settings", () => Settings);