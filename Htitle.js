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
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Htitle = ({title, id})=>{
  return(
    <View style={{backgroundColor:'blue',height:50, width:'100%'}}>
      <Text style={{color:'white'}}>
      {title} : {id}
      </Text>
      
    </View>

  );
}
 Htitle.defaultProps={
  title:'HomePage',
  id:12
 }

export default Htitle;
