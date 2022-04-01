import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Animatable from 'react-native-animatable';
import { AlignCenter } from 'react-native-feather';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {

    const pressHandler = () => {
        navigation.push('Profile');
    }
    const dimensions = Dimensions.get('window');
    const shelfHeight = Math.round(dimensions.width * 9/16);
    const shelfWidth = dimensions.width;
    
    return (
        <View style ={styles.container}>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={pressHandler}>
                        <View style={styles.iconView}>
                            <AntDesign name="user" style={styles.icon} size={20}/>
                            <Text style={styles.iconText}>Profile</Text>
                        </View>
                </TouchableOpacity>
                <Text style={styles.text_header}>Home</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <View style={styles.iconView}>
                            <AntDesign name="poweroff" style={styles.icon} size={20}/>
                            <Text style={styles.iconText}>Log Out</Text>
                        </View>
                </TouchableOpacity>
            </View>
            <View>
                <Animatable.Image animation="bounceIn"duraton="1500"source={require('../assets/shelf.jpg')}style={styles.logo} resizeMode="contain"/>
                <Animatable.Image animation="bounceIn"duraton="1500"source={require('../assets/shelf.jpg')}style={styles.logo} resizeMode="contain"/>
                <Animatable.Image animation="bounceIn"duraton="1500"source={require('../assets/shelf.jpg')}style={styles.logo} resizeMode="contain"/>
            </View>
        </View>
    );
};

export default Home;

const {height} = Dimensions.get("screen");
const width_shelf = height * 0.42;
const height_shelf = height * 0.275;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffffff',
      padding: 20,
    },
    logo: {
        width: width_shelf,
        height: height_shelf,
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