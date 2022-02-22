import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,LogBox} from 'react-native';
import constants from 'expo-constants'
import Home from'./screens/home'
import Profile from'./screens/Profile'
import Login from'./screens/Login'

import {NavigationContainer} from'@react-navigation/native';
import{createStackNavigator} from'@react-navigation/stack'
import createemployee from './screens/createemployee';
import {createStore} from 'redux'
import{Provider} from 'react-redux'
import{reducer} from './screens/reducers/reducer'


const store = createStore(reducer)

 const Stack = createStackNavigator();
 const myoptions=
 {title:"My Sweet Home",
 headerTintColor:"white",
 headerStyle:{
   backgroundColor:"blue"
 }

 }
function App() {
  return (
    <View style={styles.container}>
     <Stack.Navigator>
     <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={createemployee} />
      <Stack.Screen name="Profile" component={Profile} />
     </Stack.Navigator> 
    </View>
  );
}

export default()=>{
  return(
    <Provider store={store}>
    <NavigationContainer>
      <App/>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      
  },
});
