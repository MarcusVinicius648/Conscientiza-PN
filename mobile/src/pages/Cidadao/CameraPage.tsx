import React,{useEffect,useState} from 'react';
import {SafeAreaView,StyleSheet, Alert} from 'react-native';
import  {Camera}  from 'expo-camera';

export function CameraPage(){
    const [startCamera, setStartCamera] = useState(false)
    
    useEffect(()=>{
        async function handlePermission() {
            const {status} = await Camera.requestPermissionsAsync()
            if(status === 'granted'){
                setStartCamera(true)
            }else{
            Alert.alert("Access denied")
            }   
        };
        handlePermission();
    },[])

    return(
        <SafeAreaView>
                
        </SafeAreaView>
    )    
}

const styles = StyleSheet.create({

})