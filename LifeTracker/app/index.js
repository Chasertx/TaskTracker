/*
Serves as a home page to navigate between various
pages defined in separate files of the application.
*/
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

/*
Link = a link to anywhere, can be set to other file paths.
View = Similar to a Div Container.
StatusBar = zone at the top of the screen. Contains the time, wifi, cell network info, and battery level.
*/
const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <StatusBar style="auto"/>
            <Link href= "/profile" style = {{color: 'blue'}}>Go to profile</Link>
        </View>
    )
}

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

export default Home;