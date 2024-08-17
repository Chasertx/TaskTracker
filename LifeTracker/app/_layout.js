/*
Determines application structure and routing
*/

import { StyleSheet, Text, View } from 'react-native'
import {Slot, Stack} from 'expo-router'

const RootLayout = () => {
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