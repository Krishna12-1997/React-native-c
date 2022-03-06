import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import COLOR from "../src/Const/Color";


const EditDetails =({navigation}) =>{
   
    const [name, setName] = useState("");
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [DOB, setDOB] = useState("");
 // console.log(name, email, password);

   
     
    return (
        <View style={styles.container1}>

            <Text style={styles.head}>Complete your profile</Text>
          
            <View style={{ marginTop: 20 }}>
                <View style={styles.inputContainer}>
                    <Icon name="person" size={20} color={COLOR.light} style={styles.inputIcons} />
                    <TextInput
                        placeholder="username" style={styles.input}
                          autoCorrect={false} 
                         autoCapitalize="none" 
                         value={username} onChangeText= {(actualData) => setUserName(actualData)} />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.inputContainer}>
                    <Icon name="mail-outline" size={20} color={COLOR.light} style={styles.inputIcons} />
                    <TextInput placeholder="Email" style={styles.input}
                     autoCorrect={false} autoCapitalize="none"
                     value={email} onChangeText= {(actualData) => setEmail(actualData)} />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.inputContainer}>
                    <Icon name="phone" size={20} color={COLOR.light} style={styles.inputIcons} />
                    <TextInput
                        placeholder="phone" style={styles.input}
                          autoCorrect={false} 
                         autoCapitalize="none" 
                         value={phone} onChangeText= {(actualData) => setPhone(actualData)} />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.inputContainer}>
                    <Icon name="date" size={20} color={COLOR.light} style={styles.inputIcons} />
                    <TextInput
                        placeholder="DOB" style={styles.input}
                          autoCorrect={false} 
                         autoCapitalize="none" 
                         value={DOB} onChangeText= {(actualData) => setDOB(actualData)} />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.inputContainer}>
                    <Icon name="lock-outline" size={20} color={COLOR.light} style={styles.inputIcons} />
                    <TextInput placeholder="Password" style={styles.input}
                     autoCorrect={false} autoCapitalize="none"
                      secureTextEntry={true}   value={password} onChangeText= {(actualData) => setPassword(actualData)}/>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.btnprimary}>
                <Text style={{ fontWeight: "bold", color: COLOR.white, fontSize: 18 }}> Save</Text>
            </View>
            </TouchableOpacity>
           
        </View>

    )
};

const styles = StyleSheet.create({
    container1: {
        marginHorizontal: 20,
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


export default EditDetails;