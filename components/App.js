//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import fire from '../config/fire';
import LoginForm from './LoginForm';
import Home from './Home';
import Loading from './loading';
import Pic from '../image/bg2.jpg';

// create a component
class App extends Component{

  state={
    loggedIn: null
  }
  componentDidMount(){
    this.authListner()
  }
  authListner(){
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({
          loggedIn: true
        })
      }else{
        this.setState({
          loggedIn: false
        })
      }
    })
  }
   


  renderContent = () => {
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={Pic}>
          <LoginForm/>
        </ImageBackground>
        

      case true:
        return <Home/>  

        default :
        return<Loading/>
    }
  }
   render(){
     return(
       <View style={styles.container}>
         {this.renderContent()}
       </View>
     );
   }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%',
  },
});

//make this component available to the app
export default App;
