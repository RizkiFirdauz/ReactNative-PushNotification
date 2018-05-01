import React, { Component } from 'react';
import { AppState, View, Text } from 'react-native'
import PushController from './Push';
import PushNotification from 'react-native-push-notification';

class App extends Component {
    constructor() {
    super();
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {ms:5000};
}
componentDidMount(){
    AppState.addEventListener(
        'change',this.handleAppStateChange);
}
handleAppStateChange(appState){
    if(appState === 'background'){
        PushNotification.localNotificationSchedule({
            title: "New Inbox",
            message: "Hey guys, new inbox for you! ",
            date: new Date(Date.now() + (this.state.ms)),
        });
    }
}
render() {
    return ( 
        <View>
            <Text> Hello bro how are you? </Text>
            <PushController/>
        </View>
);}}

export default App;