/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



export const box1=StyleSheet.create({
  main:{
    backgroundColor:'blue',
    height:100,
    
  },
  a:{
    color:'pink'
  }
  
  
})

export const box2=StyleSheet.create({
  main:{
    backgroundColor:'red'
  },
  box: {
    padding:20
  }
  
})

 const mainbox=StyleSheet.create({
  main:{
    backgroundColor:'red'
  },
  box: {
    padding:20
  }

})
export default mainbox;
