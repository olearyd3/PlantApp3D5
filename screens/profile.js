import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Button, Image, Platform} from 'react-native';
import { globalStyles } from '../styles/global';
import { Fontisto, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const Profile = ({ navigation }) => {

    const pressHandler = () => {
        // function to go back to the home screen
        navigation.goBack();
    }
    const createStreakAlert = () => 
        Alert.alert(
            "Streak:",
            "This is the current amount of days that your plants have been kept alive for!",
        [
            {
                text: "OK", 
                onPress: () => console.log("OK pressed!")
            }
        ]
    );
    const [image, setImage] = useState(null);

        useEffect( async() => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !== 'granted') {
                alert('Permission was not granted!')
            }
        }, [])

    const PickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })
        console.log(result)
        if(!result.cancelled) {
            setImage(result.uri)
        }
    }
        return (
            <View style={globalStyles.container}>
                <View style={{flexDirection: "row", paddingBottom: 40}}>
                    <TouchableOpacity onPress={pressHandler}>
                            <View style={styles.iconView}>
                                <Ionicons name="home-outline" style={styles.icon} size={20}/>
                                <Text style={styles.iconText}>Home</Text>
                            </View>
                    </TouchableOpacity>
                    <Text style={styles.text_header}>Profile</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <View style={styles.iconView}>
                                <AntDesign name="poweroff" style={styles.icon} size={20}/>
                                <Text style={styles.iconText}>Log Out</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.picUpload, {alignItems: 'center', justifyContent: 'center'}]}>
                    <TouchableOpacity title={"Upload a Profile Picture"} onPress={PickImage}>
                    <View>
                        {image && <Image source={{uri:image}} style={{
                            width:300,
                            height:300,
                            borderRadius: 300/2
                        }}/>}
                        <View style={{justifyContent: 'center', textAlign: 'center'}}>
                            <MaterialIcons name="add-circle-outline" style={styles.icon} size={20}/>
                            <Text style={styles.iconText}>Upload a Profile Picture!</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.fillerText}></Text>
                </View>
                <View style={styles.streakStyle}>
                    <TouchableOpacity title={"Streak Alert"} onPress={createStreakAlert}>
                        <View style={styles.iconView}>
                            <View style={{flexDirection: "row"}}>
                                <Fontisto name="fire" style={styles.streakIcon} size={20}/>
                                <Text style={styles.iconText}>  1</Text>
                            </View>
                            <Text style={styles.iconText}>Current Streak</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
      );
    }
     export default Profile;
    
     const styles = StyleSheet.create({
      container: {
        flex: 1, 
        backgroundColor: '#ffffff',
        padding: 20,
      },
      fillerText: {
        color: '#333'
      },
      logo: {
          alignItems: 'center'
      },
      titleText: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
      }, 
      iconView: {
          backgroundColor: 'teal',
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 5,
          color: 'white',
          fontWeight: 'bold',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 3,
          borderColor: 'lightsteelblue'
      },
      picUpload: {
          width: 300,
          height: 300,
          borderRadius: 300/2,
          borderWidth: 3,
          borderColor: 'teal',
          backgroundColor: '#fbe4d6',
          alignItems: 'center',
          justifyContent: 'center',
      },
      iconText: {
          color: 'white',
          fontWeight: 'bold',
      },
      streakStyle: {
        bottom: 0, 
        position: 'relative'
      },
      streakIcon: {
        color: '#FC6A03',
        fontWeight: 'bold',
        alignItems: 'center'
    },
      icon: {
          color: 'white',
          fontWeight: 'bold',
          alignItems: 'center'
      },
      addPicIcon: {
        color: 'teal',
        //fontWeight: 'bold',
        alignItems: 'center'
      },
      textSign: {
          backgroundColor: 'teal',
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 5,
          color: 'white',
          fontWeight: 'bold',
          justifyContent: 'center'
      },
      header: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 30
      },
      text_header: {
          color: 'black',
          fontWeight: 'bold',
          justifyContent: 'center',
          fontSize: 40,
          flex: 1,
          paddingHorizontal: 20,
          marginBottom: 15,
          textAlign: 'center'
      },
      footer: {
          flex: 6,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30
      },
    });