import React from 'react';
import { StyleSheet, Component, TouchableOpacity, Image, Text, Dimensions, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

import addImg from '../assets/addplant.jpg';
import plantImg from '../assets/theme1fiveleaves.jpg';
const Add = (position) => {

    return position
}

const Home = ({ navigation }) => {

    const pressHandler = () => {
        navigation.push('Profile');
    }
    
    const [plant, setPlant] = React.useState({
        plantSelect: true,
        plant2Select: true,
        plant3Select: true,
        plant4Select: true,
        plant5Select: true,
        plant6Select: true,
        plant7Select: true,
        plant8Select: true,
        plant9Select: true
    });

    const updatePlantSelect = () => {
        setPlant({
            ... plant,
            plantSelect: !plant.plantSelect
        })
    }

    const updatePlant2Select = () => {
        setPlant({
            ... plant,
            plant2Select: !plant.plant2Select
        })
    }

    const updatePlant3Select = () => {
        setPlant({
            ... plant,
            plant3Select: !plant.plant3Select
        })
    }
    const updatePlant4Select = () => {
        setPlant({
            ... plant,
            plant4Select: !plant.plant4Select
        })
    }
    const updatePlant5Select = () => {
        setPlant({
            ... plant,
            plant5Select: !plant.plant5Select
        })
    }
    const updatePlant6Select = () => {
        setPlant({
            ... plant,
            plant6Select: !plant.plant6Select
        })
    }
    const updatePlant7Select = () => {
        setPlant({
            ... plant,
            plant7Select: !plant.plant7Select
        })
    }
    const updatePlant8Select = () => {
        setPlant({
            ... plant,
            plant8Select: !plant.plant8Select
        })
    }
    const updatePlant9Select = () => {
        setPlant({
            ... plant,
            plant9Select: !plant.plant9Select
        })
    }

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
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity onPress={updatePlantSelect}>
                        {plant.plantSelect ?
                        <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                        :
                        <Image source={require('../assets/theme1heartplant.jpg')} style={styles.plantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatePlant2Select}>
                        {plant.plant2Select ?
                        <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                        :
                        <Image source={require('../assets/theme1fiveleaves.jpg')} style={styles.tallPlantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatePlant3Select}>
                        {plant.plant3Select ?
                        <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                        :
                        <Image source={require('../assets/theme1flowerpot.jpg')} style={styles.plantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                </View>
            </View> 
            <View>
                <Animatable.Image animation="bounceIn"duraton="1500"source={require('../assets/shelf.jpg')}style={styles.logo} />
            </View> 
            <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
            <TouchableOpacity onPress={updatePlant4Select}>
                        {plant.plant4Select ?
                        <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                        :
                        <Image source={require('../assets/theme1tallplant.jpg')} style={styles.tallPlantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatePlant5Select}>
                        {plant.plant5Select ?
                        <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                        :
                        <Image source={require('../assets/theme1heartplant.jpg')} style={styles.plantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatePlant6Select}>
                        {plant.plant6Select ?
                        <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                        :
                        <Image source={require('../assets/theme1threeleafplant.jpg')} style={styles.tallPlantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                </View>
            <View>
                <Animatable.Image animation="bounceIn"duraton="1500"source={require('../assets/shelf.jpg')}style={styles.logo} />
            </View> 
            <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
                <TouchableOpacity onPress={updatePlant7Select}>
                    {plant.plant7Select ?
                    <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                    :
                    <Image source={require('../assets/theme1threeleafplant.jpg')} style={styles.tallPlantOnShelf}></Image>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={updatePlant8Select}>
                    {plant.plant8Select ?
                    <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                    :
                    <Image source={require('../assets/theme1flowerpot.jpg')} style={styles.plantOnShelf}></Image>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={updatePlant9Select}>
                    {plant.plant9Select ?
                    <Image source={require('../assets/addplant.jpg')}style={styles.tinyLogo}></Image>
                    :
                    <Image source={require('../assets/theme1fiveleaves.jpg')} style={styles.tallPlantOnShelf}></Image>
                    }
                </TouchableOpacity>
            </View>
            <View>
                <Animatable.Image animation="bounceIn"duraton="1500"source={require('../assets/shelf.jpg')}style={styles.logo} />
            </View> 
        </View>
    );
};

export default Home;

//const {height} = Dimensions.get("screen");
//const width_shelf = height * 0.42;
//const height_shelf = height * 0.275;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffffff',
      padding: 20,
    },
    logo: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        flexDirection: 'column',

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
    add: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontWeight:'bold',
        textAlign: 'center',
        fontSize: 25,
    },
    tinyLogo: {
        borderRadius: 60/2,
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'teal',
    },
    plantOnShelf: {
        width: 80,
        height: 80,
    },
    tallPlantOnShelf: {
        width: 50,
        height: 80,
    }
});
