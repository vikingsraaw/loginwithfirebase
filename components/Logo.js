//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source= {{uri:'https://uilogos.co/img/logotype/kyan.png'}} style={{height:150, width:150}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      
    },
});

//make this component available to the app
export default Logo;
