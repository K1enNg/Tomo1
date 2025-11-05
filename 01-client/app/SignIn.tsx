import React, { useState } from 'react'
import { Text,TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  const title = "Dang ky";
  const[userName,setUserName] = useState('');
  const[password,setPassword] = useState('');
  return (
    <SafeAreaView>
      //Title
      <Text>{title}</Text>
      //Input 1
      <TextInput 
        value={userName}
        onChangeText={setUserName}
        placeholder='Mat khau'
      />
      //Input 2
      <TextInput
        value={password}
        placeholder='nhap lai mat'
        onChangeText={setPassword}
        secureTextEntry={true}
        
      />
      //space 
      //button
    </SafeAreaView>
  )
}

export default SignIn