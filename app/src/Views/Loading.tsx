import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button,Alert} from 'react-native';


export default class Loading extends React.Component{
    render(){
        return(
            <View style={styles.view}>
                <Text>Loading...</Text>
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