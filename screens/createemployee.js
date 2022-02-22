import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import {TextInput, Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'


const createemployee =({navigation})=>{
const [name,setName]= useState("")
const [phone,setPhone]= useState("")
const [email,setEmail]= useState("")  
const [salary,setSalary]= useState("")
const [picture,setPicture]= useState("")
const [position,setPosition]= useState("")
const [modal,setModal]= useState(false)

const submitData =() =>{
        fetch("http://localhost:3000/send-data",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                salary,
                picture,
                position
             })

             })
             .then(res=>res.json())
             .then(data=>{
                 Alert.alert(`${data.name} is saved sucessfully`)
                 navigation.navigate("Home")
             })
             .catch(err=>{
                Alert.alert("something went wrong")
            })
}

const pickFromGallery = async ()=>{
   const{granted} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
   if(granted){
        await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        if(!data.canceled){
            let newfile ={
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`, 
            Name:`test.${data.uri.split(".")[1]}`
         }
             handleUpload(newfile)
         }
   }else{
        Alert.alert("you need to give us permission to work")
   }
}
const pickFromCamera = async ()=>{
   const{granted} = await Permissions.askAsync(Permissions.CAMERA)
   if(granted){
        await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        if(!data.canceled){
           let newfile ={
               uri:data.uri,
               type:`test/${data.uri.split(".")[1]}`, 
           Name:`test.${data.uri.split(".")[1]}`
        }
            handleUpload(newfile)
        }
   }else{
        Alert.alert("you need to give us permission to work")
   }
}

const handleUpload=(image)=>{
   const data= new FormData()
       data.append('file',image)
       data.append('upload_preset','employeeApp')
       data.append("cloud_name","dgv3q5hhq")

       fetch("https://api.cloudinary.com/v1_1/dgv3q5hhq/image/upload",{
           method:"post",
           body:data
       }).then(res=>res.json()).
       then(data=>{
           setPicture(data.url)
           setModal(false)
       }).catch(err=>{
        Alert.alert("error while uploading")
    })
   
}


return(
    <View style={Styles.root} >
        <TextInput
          label="Name"
          style={Styles.inputstyle}
          value={name}
          theme={theme}
          mode='outlined'
         onChangeText={text => setName(text)}
    />
    <TextInput
          label="Email"
          style={Styles.inputstyle}
          value={email}
          theme={theme}
          mode='outlined'
         onChangeText={text => setEmail(text)}
    />
    <TextInput
          label="Phone"
          style={Styles.inputstyle}
          value={phone}
          theme={theme}
          keyboardType="number-pad"
          mode='outlined'
         onChangeText={text => setPhone(text)}
    />
    <TextInput
          label="Salary"
          style={Styles.inputstyle}
          value={salary}
          theme={theme}
          mode='outlined'
         onChangeText={text => setSalary(text)}
    />
    <TextInput
          label="Position"
          style={Styles.inputstyle}
          value={position}
          theme={theme}
          mode='outlined'
         onChangeText={text => setPosition(text)}
    />
    <Button 
    style={Styles.inputstyle}
    icon={picture==""?"upload":"check"}
    mode="contained" 
    theme={theme}
    onPress={() => setModal(true)}>
                Upload Image
    </Button>
    <Button 
                icon="content-save"
                theme={theme}
                mode="contained"
                 onPress={() => submitData()}>
                Save
                </Button>
    <Modal
    animationType="slide"
    transparent={true}
    visible={modal}
    onRequestClose={()=>{
        setModal(false)
    }}
    
    >
<View style={Styles.modalview}>
    <View style={Styles.modalButtonView}>
    <Button icon="camera" 
    theme={theme}
    mode="contained" 
    onPress={() => pickFromCamera()}>
                Camera
                </Button>
                <Button 
                icon="image-area"
                theme={theme}
                mode="contained"
                 onPress={() => pickFromGallery()}>
                Gallery
                </Button>

    </View>
<Button   onPress={() => setModal(false)}>
                cancel
                </Button>
</View>


    </Modal>
    </View>

)

}
const theme={
 colors:{
     primary:"blue"
 }   
}
const Styles=StyleSheet.create({
    root:{
        flex:1
        
    },
    inputstyle:{
        margin:5
    
    },
    modalview:{
        position:"absolute",
        bottom:2,
        width: "100%",
        backgroundColor:"white"
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding: 10
    }

})
export default createemployee
