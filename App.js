/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import styles from './sty';
import Htitle from './Htitle';
import mainbox ,{box1,box2} from './all';

const App = ()=>{
  const [num,setNum] = useState(0);

  const click=()=>{
    let temp= num+1;
    setNum(temp);

    console.log("**** Click accur"+num)
  }
  useEffect(()=>{
    console.log("\n*****Reload again")
  },[]);

  return(
  <SafeAreaView style={[styles.main, ]}>
    <Text style={[box1.a,box1.main]}>
     <Htitle  />
     </Text>
     <View>
     <TouchableOpacity onPress={()=>click(4)}>
      <Text>Click me</Text>
    </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}




export default App;
