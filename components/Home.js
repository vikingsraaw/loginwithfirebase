//import liraries
import React, { Component } from 'react';
import fire from '../config/fire';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.homeContainer}>
                <Text style={styles.heading}>
                    Home Screen
                </Text>

                
                <Text style={styles.content}>
                     Login Successful;
                </Text>

            </View>
               

                <TouchableOpacity style={{padding:20}} onPress={()=>fire.auth().signOut()}>

                    <Text style={{color:'#1B9CFC'}}> 
                       Logout
                    </Text>

                </TouchableOpacity>
 
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    homeContainer:{
        padding:10,
        borderBottomColor:'rgba(255,255,255,.7)',
        borderBottomWidth:10,

    },
    heading:{
        fontSize:22,
       
        marginBottom:10,
    },
    content:{
        marginTop:10,
        fontSize:19,
    }
});

//make this component available to the app
export default Home;
