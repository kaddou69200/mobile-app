import React from 'react'
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button,Alert} from 'react-native';

interface LogoutProps{
    logout: () => void
}

export default class Login extends React.Component<LogoutProps>{

    logout = () =>{
        this.props.logout();
    }

    render(){
        return (
            <View style={styles.view}>
                <Text>
                    Welcolm Home
                </Text>
                <Button onPress={this.logout}
                title="Se deconnecter"/>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})