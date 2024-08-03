import { StatusBar } from 'expo-status-bar';
import { CameraView, CameraType, useCameraPermissions, Camera, } from 'expo-camera';
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Alert, StyleSheet } from 'react-native';

const App = () => {

  const [flash,setFlash]=useState(false);

  const handlePress = () => {
    const currentTime= new Date().getTime();
    //Alert.alert('Geçerli Zaman', `Milisaniye cinsinden: ${currentTime}`);
    setFlash(!flash)
    
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{flash?"OFF":"ON"}</Text>
      </TouchableOpacity>
      <CameraView flash='on' enableTorch={flash}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    height:150,
    width:150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 50,
  },
});

export default App;
