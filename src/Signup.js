import { View, Button, StyleSheet,useState, Linking, Text, TouchableOpacity, TextInput, onChangeText } from 'react-native'
import React from 'react'
import Background from './Background'
import { white } from './constraint';

const Signup = (props) => {
  
  const [Name, setName] = React.useState("");
  const [EMAIL, setEmail] = React.useState("");
  const [PASSWD, setPasswd] = React.useState("");


  return (
    <Background>

      {/* here is login line */}
      
      <View style={{ marginHorizontal: 40, marginVertical: 150 }}>
                <Text style={{ color: 'white', fontSize: 40, }}>Sign Up </Text>
                <Text style={{ fontSize: 20, color: 'white' }}> Enter your creadentials t continue</Text>
      </View>

    {/* input fields .. . . . . */}
    <View style={{ marginLeft: 25, padding: 10, width: 350 }}>
                <TextInput
                    style={styles.input}
                    placeholder='Name'

                    label="Name"

                    value={Text}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={styles.input1}
                    placeholder='Email'
                    label="Email"
                    value={Text}
                    onChangeText={text => setPasswd(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Mobile No.'

                    label="Mobile"

                    value={Text}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'

                    label="Passwd"

                    value={Text}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'

                    label="Email"

                    value={Text}
                    onChangeText={text => setEmail(text)}
                />
              
            </View>

            {/* sign up buttton */}

            <TouchableOpacity style={{
                marginHorizontal: 40, padding: 10, justifyContent: 'center',
                backgroundColor: "#003153", borderRadius: 0, alignItems: 'center', width: 315
            }}>
                <Text style={{ color: "white", fontSize: 22, fontWeight: 'bold' }} >Sign Up</Text>
            </TouchableOpacity>

            {/* already have an account */}

            <View style={{ marginVertical: 100 }}>
                <Text style={{ marginTop:50,color: 'white', fontSize: 15, textAlign: 'center' }}>Already have an account ? </Text>
                <Text style={{ marginVertical: 10, color: 'white', fontSize: 15, textAlign: 'center' }}
                    onPress={() => props.navigation.navigate("Home")  }>   Login </Text>  
            </View>

    </Background>
  )
}


const styles = StyleSheet.create({
  input: {
      height: 40,

      backgroundColor: 'white',
      marginHorizontal: 5,
      borderWidth: 1,
      padding: 8,
  },
  input1: {
      height: 40,

      backgroundColor: 'white',
      marginHorizontal: 5,
      borderWidth: 1,
      padding: 8,
  },
})

export default Signup