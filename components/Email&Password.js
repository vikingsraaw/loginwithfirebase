//import liraries
import React, { Component } from 'react';
import fire from '../config/fire';
import { View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';

// create a component
class  EmailPassword extends Component   {

    state = {
        email: '',
        password:'',
        error:'',
        loading: false
        
    }
   
    onButtonPress= () =>{
          fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
          .then(this.onLoginSuccess)
          .catch(err=>{
              this.setState({
                  error: err.message
              })
          })
    }

    onLoginSuccess = ()=> {
        this.setState({
            error:'',
            loading: false
           
        })    
    }
    Register = () =>{
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onSignupSuccess)
        .catch(err=>{
            this.setState({
                error:err.message
            })
        })
    }
    onSignupSuccess= ()=>{
        this.setState({
            error:'User Created',
            loading: false
        })
    }
    
    render(){
        return(
        <View style={styles.container}>
            <TextInput 
            placeholder='email' 
            style={styles.input} 
            value={this.state.email}
            onChangeText={email=>this.setState({email})}/>

            <TextInput
             placeholder='password' 
            style={styles.input} 
            secureTextEntry
            value={this.state.password}
            onChangeText={password=> this.setState({password})}/>
          
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress}>
          <Text style={styles.buttonText}>
              Login
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonContainer2} onPress={this.Register}>
          <Text style={styles.buttonText}>
              Register
          </Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>
                {this.state.error}
            </Text>
        </View>
    );
};
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    
    input: {
        height: 40,
        backgroundColor:'rgba(255,255,255,.5)',
        padding:0,
        marginBottom:15,
        borderRadius:10,
        fontSize:15,
           },
   errorText: {
       fontSize: 25,
       color: 'red',
       alignSelf:'center',
       marginTop: 10,
   },
   buttonText: {
       textAlign: 'center',
       fontWeight:'bold',
       fontSize:20,

   },
   buttonContainer:{
       backgroundColor:'#3B3B98',
       padding: 5,
       borderRadius:8,
   },
   buttonContainer2:{
    backgroundColor:'#3B3B98',
    padding: 5,
    borderRadius:8,
    marginTop: 4
}
});

//make this component available to the app
export default EmailPassword;
