import { View, Text, StyleSheet,ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("../src/assets/back.jpg")} style={{height:'100%'}}/>
        <View style={{position:"absolute"}}>
            {children}
        </View>
    </View>
     
    
    )
}
const styles = StyleSheet.create({})

export default Background;