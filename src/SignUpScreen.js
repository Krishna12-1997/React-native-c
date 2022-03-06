import React, { isValidElement, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import COLOR from "../src/Const/Color";
import HomeScreen from "./HomeScreen";


const isvalidObjField =(obj) => {
  return  Object.values(obj).every(value => value.trim());
}

const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater('')
    }, 2500);
}

const isValidEmail = (value) => {
    const regx = ' ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
    return regx.test(value);
}

const SignUpScreen = ({ navigation }) => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
    });

    const [error, setError] = useState('')

   const {name, email, password} = userInfo
    
   const handleOnChangeText = (value, fieldName) =>{
     setUserInfo({...userInfo, [fieldName]: value});
   };

   const isValidForm = () => {
       // we will accept only if all the fields have value
      if(!isvalidObjField(userInfo)) return updateError('Required all fields!', setError);
      // if valid name with 3 or more characters
      if(!name.trim() || name.length < 3) return updateError('Invalid name!', setError);
      // only valid email id is allowed
      if(!isValidEmail(email)) return updateError('Invalid email!', setError);
      // password must have 8 or more characters
      if(!password.trim() || password.length < 6) return updateError('Password is less than 6 characters!', setError);
      

      return true;
   }

   const sumbitForm =() => {
       if(isValidForm()){
           // submit form
          
           console.log(userInfo);
       }
   }


    return (
        <View style={styles.container}>
            <Text style={styles.red}>BRAI</Text>
            <Text style={styles.bigBlue}>NCD</Text>
            <View style={styles.container1}>
                <Text style={styles.head}>Welcome,</Text>
                <Text style={styles.small}>Sign Up to continue</Text>
                <View style={{ marginTop: 20 }}>
                {error ? <Text style={{color: 'red', fontSize: 18, 
                                textAlign: 'center'}}>{error}</Text>: null}
                    <View style={styles.inputContainer}>
                        <Icon name="person-outline" size={20} color={COLOR.light} style={styles.inputIcons} />
                        <TextInput
                            placeholder=" name" style={styles.input}
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={name} onChangeText={(value) => handleOnChangeText(value, 'name')} />
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.inputContainer}>
                        <Icon name="mail-outline" size={20} color={COLOR.light} style={styles.inputIcons} />
                        <TextInput placeholder="Email" style={styles.input}
                            autoCorrect={false} autoCapitalize="none"
                            value={email} onChangeText={(value) => handleOnChangeText(value, 'email')} />
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.inputContainer}>
                        <Icon name="lock-outline" size={20} color={COLOR.light} style={styles.inputIcons} />
                        <TextInput placeholder="Password" style={styles.input}
                            autoCorrect={false} autoCapitalize="none"
                            secureTextEntry={true} value={password} onChangeText={(value) => handleOnChangeText(value, 'password')} />
                    </View>
                </View>
               
                <TouchableOpacity onPress={() => sumbitForm(navigation.navigate('Home'))} >
                   <View style={styles.btnprimary}>
                        <Text style={{ fontWeight: "bold", color: COLOR.white, fontSize: 18 }}> Sign up</Text>
                    </View>
            </TouchableOpacity>
            <View style={{
                marginVertical: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={styles.line}></View>
                <Text style={{ fontWeight: "bold", marginHorizontal: 5 }}>OR</Text>
                <View style={styles.line}></View>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between'
            }}>
                <View style={styles.btnsecondary}>
                    <Text style={{ fontWeight: "bold" }}>Sign up with</Text>
                    <Icon name="facebook" size={30} />
                </View>

            </View>

            <View style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "center",
                marginTop: 40,
                marginBottom: 20,
            }}>
                <Text style={{ color: COLOR.light }} >Already have an account?</Text>
                <TouchableOpacity title="Go to Details"
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{ color: COLOR.pink, fontWeight: "bold" }}>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    
        </View >
      

    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        display: "inline-block",


    },
    bigBlue: {
        color: '#64beff',
        fontSize: 22,
        fontWeight: "bold"
    },
    red: {
        color: '#000',
        fontSize: 22,
        fontWeight: "bold"
    },
    container1: {
        marginTop: 50,
    },
    head: {
        fontSize: 27,
        fontWeight: "bold",
        color: COLOR.dark,
    },
    small: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#a5a5a5",
    },
    inputContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    input: {
        color: COLOR.light,
        paddingLeft: 15,
        flex: 1,
        fontSize: 18,
        borderBottomWidth: 0.5,
        outLine: "none",

    },
    btnprimary: {
        backgroundColor: COLOR.primary,
        height: 50,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    line: {
        height: 1,
        width: 30,
        backgroundColor: COLOR.light,
    },
    btnsecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: COLOR.light,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        flexDirection: 'row',
    }
});


export default SignUpScreen;