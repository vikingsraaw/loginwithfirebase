//import liraries
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Logo from './Logo';
import EmailPassword from './Email&Password';

// create a component
const LoginForm = (navigate) => {
    return (
        <View style={styles.container}>
           <View style= {styles.logoContainer}>

              <Logo/>

           </View>
           <View style = {styles.emailPasswordContainer}>
             <EmailPassword/>
           </View>
          
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
     
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailPasswordContainer: {
        flex: 2,
        justifyContent: 'center',
    },

});

//make this component available to the app
export default LoginForm;
