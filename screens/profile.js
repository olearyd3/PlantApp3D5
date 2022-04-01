import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {

    const pressHandler = () => {
        // function to go back to the home screen
        navigation.goBack();
    }
  return (
    <View style={globalStyles.container}>
      <View style={{flexDirection: "row"}}>
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
      alignItems: 'center'
  },
  iconText: {
      color: 'white',
      fontWeight: 'bold',
  },
  icon: {
      color: 'white',
      fontWeight: 'bold',
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