/*
Determines application structure and routing 
of components in the application
*/

import { StyleSheet, Text, View } from 'react-native'
import {Slot, SplashScreen, Stack} from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';

//Prevents screen from auto hiding before assets are loaded.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    //getting all the fonts loaded
    const [fontsLoaded, error] = useFonts({
        //"FontName" : require ("/font/location")
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
      });

    /*
    UseEffect - allows us to perform actions
    while a page is loading 
    function callback executes when fontsLoaded
    changes or there is an error
    */
    useEffect(() => {
        if(error) throw error;

        //Hides Native flashscreen immediately
        if(fontsLoaded) SplashScreen.hideAsync();

    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;

    /*
    Stack = stack of individual screens
    Slot = Content area
    View = Div 
    */
  return (
    <>
    <Stack>
        <Stack.Screen name= "index" options= {{headerShown: false }}/>
    </Stack>
    </>
)
}

export default RootLayout

const styles = StyleSheet.create({
      container: {
        display: 'flex',
        flex: '1',
        //Aligns horizontally
        alignItems: 'center',
        //Aligns vertically
        justifyContent: 'center'
      }
      
})