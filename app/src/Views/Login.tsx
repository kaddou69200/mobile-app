import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,Alert} from 'react-native';
import Button from '../components/Button'
import Logo from '../components/Logo'
import R from 'res/R'
import crashlytics from '@react-native-firebase/crashlytics'

interface LoginProps{
    login: () => void
}

export default class Login extends React.Component<LoginProps>{
    login = () =>{
        crashlytics().log('App mounted.');
        this.props.login();
    }
    
    render(){
        return (
            <View style={styles.view}>
                <Logo size={200}/>
                <Text style={styles.text}>
                    {R.i18n.t('login.welcome')}
                </Text>
                <Button 
                onPress= {this.login}
                text={R.i18n.t('login.button')}/>
                <Button text="Test Crash" onPress={() => crashlytics().crash()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#1C252C'
    },
    text:{
        color: '#ffffff',
    }
})