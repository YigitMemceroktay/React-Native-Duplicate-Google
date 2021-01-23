import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
        <View style={styles.GmailText}  >
       <Image style={styles.UserLogo}source={require('./user.png')} />
       <Image style={styles.WaffleLogo}source={require('./waffle.png')} />     
      <Text style={styles.Text1}>Görseller</Text>
      <Text style={styles.Text2}>Gmail</Text>
      </View>
      <View style={styles.main}>
         <Image style={styles.googleLogo}source={require('./Google-Logo.png')}/>
         <View style={styles.sectionStyle}>
         <Image style={styles.magnify}source={require('./search.png')} />
               <TextInput placeholder="Google'da bir arama yapın veya url yazın"style={{height:40, width:400,marginLeft:10}}></TextInput>
              <Image style={styles.voic} source={require('./voice-search.png')}/>
               
              </View>
          
              </View>
            
              
          
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  GmailText: {
    flexDirection: 'row-reverse',
    flex: 1,
   backgroundColor: 'red',
    marginTop:15,
    marginRight:20
  },
   WaffleLogo:{
     width:20,
     height:20,
     marginTop:7,
     marginRight:30
    },
    UserLogo:{
      width:35,
      height:35,
      borderRadius:20
    },
    Text1:{
      fontSize:14,
      marginRight:35,
      marginTop:8
    },
    Text2:{
      fontSize:14,
      marginRight:20,
      marginTop:8
    },
    main:{
      flex:4,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'blue'
    },
    googleLogo:{
      width:350,
      height:150,
      marginTop:-350
    },
    input:{
      width:500,
      height:35,
      borderColor:'#9E9A9A',
      borderWidth:1,
      borderRadius:25,
      paddingLeft:10,
      fontSize:15
    },
    mainTextInput:{
      backgroundColor:'violet',
      flexDirection:'row',
      width:600,
      height:50,
      borderRadius:20,
      
      
    },
    sectionStyle: {
      flexDirection: 'row',
      alignItems:'center',  
      borderColor:'#C6C6C6',
      
      borderWidth: 0.5,
      
      paddingRight:20,
      borderRadius:20,
    
      
  },
  magnify:{
    width:15,
    height:15,
    marginLeft:10,
    opacity:0.5

  },
  voic:{
    marginLeft:10,
    height:15,
    width:15,
    
  }

});
