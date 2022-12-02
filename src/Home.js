import { View, Button, StyleSheet,useState, Linking, Text, TouchableOpacity, TextInput, onChangeText } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { ButtonGroup } from '@rneui/themed';
import { blue, white } from './constraint'
import { NativeBaseProvider, Box } from "native-base";
import Signup from './Signup';
import Abouts from './Abouts';

const Home = (props) => {
    const [EMAIL, setEmail] = React.useState("");
    const [PASSWD, setPasswd] = React.useState("");
    


    return (
        <Background>
            {/* welcome screen */}

            <View style={{ marginHorizontal: 40, marginVertical: 150 }}>
                <Text style={{ color: 'white', fontSize: 40, }}>Welcome back </Text>
                <Text style={{ fontSize: 20, color: 'white' }}> Sign in to continue</Text>
            </View>

            {/* input boxx */}

            <View style={{ marginLeft: 25, padding: 10, width: 350 }}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'

                    label="Email"

                    value={Text}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input1}
                    placeholder='Password'
                    label="Email"
                    value={Text}
                    onChangeText={text => setPasswd(text)}
                />
            </View>


            {/* button for sign in */}
        
            <TouchableOpacity style={{
                marginHorizontal: 40, padding: 10, justifyContent: 'center',
                backgroundColor: "#003153", borderRadius: 0, alignItems: 'center', width: 315
            }}   >
                <Text style={{ color: "white", fontSize: 22, fontWeight: 'bold' }} 
                 >Sign In</Text>
            </TouchableOpacity>

            
            
            {/* if no account sign up */}

            <View style={{ marginVertical: 100 }}>
                <Text style={{ marginTop:50,color: 'white', fontSize: 15, textAlign: 'center' }}>Dont have an account ? </Text>
                <Text style={{ marginVertical: 10, color: 'white', fontSize: 15, textAlign: 'center' }}
                    onPress={() => props.navigation.navigate("Signup")  } >  Sign in </Text>  
            </View>

        </Background>
    )
}


// style sheet for above login page

const styles = StyleSheet.create({
    input: {
        height: 40,

        backgroundColor: white,
        marginHorizontal: 5,
        borderWidth: 1,
        padding: 8,
    },
    input1: {
        height: 40,

        backgroundColor: white,
        marginHorizontal: 5,
        borderWidth: 1,
        padding: 8,
    },
})

export default Home
