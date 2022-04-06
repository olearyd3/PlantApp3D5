import React, { isValidElement } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Animatable from 'react-native-animatable';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const SignUp = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true
    });
    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(data.email, data.password)
          .then((userCredentials) => {
              const user = userCredentials.user;
              console.log("Registered with:", user.email);
              nav.navigate('Login')
          })
          .catch((error) => alert(error.message));
      };
    const textInputChange = (val) => {
        if(val.length != 0) {
            setData({
                ... data,
                email: val,
                check_textInputChange: true
            });
        }
        else {
            setData({
                ... data,
                email: val,
                check_textInputChange: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ... data,
            password: val
        });
    }
    const handleConfirmPasswordChange = (val) => {
        setData({
            ... data,
            confirmPassword: val
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ... data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ... data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        })
    }

    return (
        <View style ={styles.container}>
            <View style={styles.header}>
            <Text style={styles.text_header}>Create Your Account!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email:</Text>
                <View style={styles.action}>
                    <Ionicons name="mail-outline" size={20} style={styles.icon_styles}/>
                    <TextInput placeholder="Enter your email" style={styles.textInput} autoCapitalize="none" onChangeText={(val) => textInputChange(val)}/>
                    {data.check_textInputChange ? 
                        <Animatable.View delay={200} animation="fadeIn">
                            <Ionicons name="checkmark-circle-outline" size={20} color="#50C878" />
                        </Animatable.View>
                    : null}
                </View>
                <Text style={[styles.text_footer, {marginTop: 10}]}>Password:</Text>
                <View style={styles.action}>
                    <AntDesign name="lock" size={20} style={styles.icon_styles}/>
                    <TextInput placeholder="Enter your password" secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handlePasswordChange(val)}/>
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Ionicons name="eye-off-outline" size={20} color="grey" />
                        :
                            <Ionicons name="eye-outline" size={20} color="grey" />
                        }
                    </TouchableOpacity>
                </View>
                
                <Text style={[styles.text_footer, {marginTop: 10}]}>Confirm Your Password:</Text>
                <View style={styles.action}>
                    <AntDesign name="lock" size={20} style={styles.icon_styles}/>
                    <TextInput placeholder="Confirm your password" secureTextEntry={data.confirmSecureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handleConfirmPasswordChange(val)}/>
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {data.confirmSecureTextEntry ?
                            <Ionicons name="eye-off-outline" size={20} color="grey" />
                        :
                            <Ionicons name="eye-outline" size={20} color="grey" />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={handleSignUp} >
                        <Text style={[styles.textSign, {paddingHorizontal: 10}]}>Make my account!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    icon_styles: {
        color: "#05375A",
        paddingRight: 10
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        textAlign: 'center',
        marginTop: 20
    },
    login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        backgroundColor: 'teal',
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold'
    }
  });