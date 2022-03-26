import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {

    const pressHandler = () => {
        navigation.push('Profile');
    }

    return (
        <View style ={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Home</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.titleText}>Home Screen</Text>
                <Button title='Go to Profile Page' onPress={pressHandler} />
                <Button title='Log Out?' onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
    );
};

export default Home;

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