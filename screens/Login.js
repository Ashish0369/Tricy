import React, {Component } from 'react';
import{View,Text,TouchableOpacity, StyleSheet,TextInput,StatusBar} from 'react-native'
import PhoneInput from 'react-native-phone-input'
export default class App extends Component {
render (){
    return(
        <View style={styles.container}>
            <StatusBar
            backgroundColor="#le900ff"
            barStyle="light-content"
            />
            <View>
            <Text style={styles.welcome}>Create Profile</Text>
            <Text style={styles.subheading}>Give Yourself An Identity</Text>
            </View>
            <View>
            <TextInput style={styles.input}
            placeholder="Full Name"
            />
            <TextInput style={styles.input}
            placeholder="Email Id"
            secureTextEntry
            />
            <PhoneInput style={styles.input}
                ref={(ref) => { this.phone = ref; }}
                onPressFlag={this.onPressFlag}
                initialCountry={'us'}
                padding="10"
                initialValue="91"
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />
            </View>
               <View style={styles.btnContainer}>
                <TouchableOpacity
                style={styles.userBtn}
                >
                    <Text style={styles.btnTxt}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.loginBtn}
                >
                    <Text style={styles.loginTxt}>Login</Text>
                </TouchableOpacity>
                </View>
               
        </View>
    );
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        backgroundColor:"white",
        padding:25
    },
    welcome:{
        fontSize:40,
        textAlign: 'justify',
         color:"black",
         marginTop:50
    },
    subheading:{
        fontSize:20,
        textAlign: 'justify',
        color:"black",
        marginBottom:80
        
    },
    input:{
        width:"100%",
        backgroundColor:"white",
        borderWidth:2,
        borderColor:"#B7B7B7",
        borderRadius:15,
        padding: 15,
        marginBottom:30,
    
    },
    btnContainer:{
        flexDirection:"column",
        justifyContent:"space-between",
        width:"100%",
        position:"relative",
        bottom:0,
        left:0
    },
    userBtn:{
        backgroundColor:"#292B3A",
        padding:15,
        width:"100%",
        alignItems:"center",
        borderRadius:30,
        padding: 15,
        marginBottom:15,
        
    },
    loginBtn:{
        backgroundColor:"transparent",
        color:"#000000",
        marginBottom:20,
        
    },
    loginTxt:{
        fontSize: 18,
        textAlign:"center"
    },
    btnTxt:{
        fontSize: 18,
        textAlign:"center",
        color:"#ffffff"
        
    }
})