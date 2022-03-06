import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity,Alert} from 'react-native';
import  Icon  from "react-native-vector-icons/MaterialIcons";
import COLOR from "../Const/Color";



const SignInScreen =({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    const [data, setData] = React.useState({
      isValidUser: true,
      isValidPassword: true,
    })


   return(
   <View style={styles.container1} >
        <Text style={styles.head}>Welcome Back,</Text>
        <Text style={styles.small}>Sign in to continue</Text>
        <View style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <Icon name="mail-outline" size={20} color={COLOR.light} style={styles.inputIcons}/>
            <TextInput placeholder="Email" style={styles.input} 
                autoCorrect={false} autoCapitalize="none"
                     value={email} onChangeText= {(actualData) => setEmail(actualData)}
                     onEndEditing ={(e) => handleValidUser(e.nativeEvent.text)} 
            />
           
          </View>
         {data.isValidUser ? null :
          <Text style={{color: "red", fontSize: 16}}>Email must be Valid Formate</Text>}
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" size={20} color={COLOR.light} style={styles.inputIcons}/>
            <TextInput placeholder="Password" style={styles.input} secureTextEntry
                autoCorrect={false} autoCapitalize="none"
                     value={password} onChangeText= {(actualData) => setPassword(actualData)}
                     onEndEditing ={(e) => handleValidPassword(e.nativeEvent.text)}
            />
          </View>
        {data.isValidPassword ? null :
          <Text style={{color: "red", fontSize: 16}}>Password must be 8 characters long</Text>}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.btnprimary}>
          <Text style={{fontWeight:"bold", color: COLOR.white, fontSize: 18}}> Sign In</Text>
        </View>
        </TouchableOpacity>
        <View style={{marginVertical:20, 
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center"}}>
          <View style={styles.line}></View>
          <Text style={{fontWeight:"bold", marginHorizontal: 5}}>OR</Text>
          <View style={styles.line}></View>
        </View>
            
          <View style={{flexDirection: "row",
                    justifyContent: 'space-between' }}>
                  <View style={styles.btnsecondary}>
                    <Text style={{fontWeight: "bold"}}>Sign in with</Text>
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
                      <Text style={{color: COLOR.light}} >Don't have an account?</Text>
                      <TouchableOpacity title="Go to Details"
                       onPress={() => navigation.navigate('SignUp')}>
                     <Text style={{color: COLOR.pink, fontWeight: "bold"}}>
                     Sign up
                     </Text>
                     </TouchableOpacity>
                   </View>
      </View>
      
    
   )
};

const styles = StyleSheet.create({
  container1:{
    marginHorizontal: 20,
     marginTop: 50,
  },
  head:{
    fontSize: 27,
    fontWeight: "bold",
    color: "#000",
  },
  small:{
    fontSize: 19,
    fontWeight: "bold",
    color: "#a5a5a5",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
},
  input:{
    color: COLOR.light,
    paddingLeft: 15,
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 0.5,
    outLine: "none",
   
},
btnprimary:{
  backgroundColor: COLOR.primary,
  height: 50,
  marginTop: 50,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
},
line:{
  height:1,
  width: 30,
  backgroundColor: COLOR.light,
},
btnsecondary:{
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


export default SignInScreen;