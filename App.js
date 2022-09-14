import React from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
//import deco from "./assets/card2.webp";
 
const image = {uri: "https://www.docformats.com/wp-content/uploads/2021/06/Birthday-Card-Template-01.png"}

const App = () =>{

  return(
    <View style = {styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>"May the Almighty Lord grant you with many<br></br>more years to come, accompanied with<br></br>
        WISDOM, SUCCESS, UBUNTU, DIGNITY,and RESPECT.<br></br>Have an ecstatic one, MAKUKHANYE."<br></br>
        Happy Birthday Lebokazi!!</Text>
      </ImageBackground> 
    </View>
  )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '70%',
    justifyContent: "center"
  },

  image: {
    flex: 1,
    height: '60%',
    justifyContent: "center",
    width:'70%',
    height:'60%'

  },

  text:{
    color: "maroon",
    textAlign: "center",
    paddingTop:"1%",
    paddingRight:"25%"
    
    
  }

});

export default App;