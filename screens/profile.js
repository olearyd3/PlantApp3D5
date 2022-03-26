import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const Profile = ({ navigation }) => {

    const pressHandler = () => {
        // function to go back to the home screen
        navigation.goBack();
    }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>User Profile Screen</Text>
      <Button title='Back to Home' onPress={pressHandler} />
    </View>
  );
}
 export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387',
  },
  titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  }, 
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
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