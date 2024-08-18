/*
Serves as a entry point for the application:
 * Starting point: It's the file that is loaded first when your app starts.
 * Registering the app: It registers your main component with the native mobile platform.
 * Connecting to native modules: It often handles the connection to native modules and APIs.
*/
import { StatusBar } from 'react-native';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

/*
Link = a link to anywhere, can be set to other file paths.
View = Similar to a Div Container.
StatusBar = zone at the top of the screen. Contains the time, wifi, cell network info, and battery level.
*/
const Home = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className= "text-3xl font-pblack">Home</Text>
            <StatusBar style="auto"/>
            <Link href= "/profile" style = {{color: 'blue'}}>Go to profile</Link>
        </View>
    )
}


export default Home;