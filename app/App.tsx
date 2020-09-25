/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Alert} from 'react-native';
import Login from './src/Views/Login'
import Home from './src/Views/Home';
import Loading from './src/Views/Loading'
import AsyncStorage from '@react-native-community/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';


export default class App extends React.Component{

  state = {
    isConnected: null,
    user: false,
  }

  loginUser = () =>{
     this.setState({isConnected: true})
     this.storeIsConnected(true)
   }

   logoutUser = () => {
     this.setState({isConnected: false}, ()=>this.storeIsConnected)
     this.storeIsConnected(false)
   }
   storeIsConnected = async(isConnected: boolean) =>{
     try{
        AsyncStorage.setItem('isConnected', (isConnected).toString())
     }
     catch(e){

     }
   }
   async  componentDidMount(){
      const isConnected = await AsyncStorage.getItem('isConnected') === "true"
      this.setState({ isConnected })
   }

  render(){
    if (this.state.isConnected === null)
      return <Loading />
    return(
      <>
        {!this.state.isConnected && <Login login={this.loginUser}/>}
        {this.state.isConnected && <Home logout={this.logoutUser}/>}
      </>
    )
  }
};

const styles = StyleSheet.create({
  view:{

  },
  text:{

  }
})
