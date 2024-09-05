/*
Serves as a entry point for the application:
 * Starting point: It's the file that is loaded first when your app starts.
 * Registering the app: It registers your main component with the native mobile platform.
 * Connecting to native modules: It often handles the connection to native modules and APIs.
*/
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import { Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';


/*
Link = a link to anywhere, can be set to other file paths.
View = Similar to a Div Container.
StatusBar = zone at the top of the screen. Contains the time, wifi, cell network info, and battery level.
contentContainerStyle = styling for that specific container
resizeMode = sets the how the object should behave with its given dimensions
You can use {''} within text elements to add things between it and it's child element
*/
const Home = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView
            contentContainerStyle={{
                height: "100%",
                }}>
                <View className="w-full items-center justify-center h-[85vh] px-4">
                    <Image
                    source={images.logo}
                    className="w-[130px] h-[84px]"
                    resizeMode="contain"/>

                    <Image
                    source={images.cards}
                    className="max-w-[380px] w-full h-[298px]"
                    resizeMode="contain"/>

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white 
                            font-bold text-center">
                                Discover Endless Possibilities with{' '}
                                <Text className="text-secondary-200">
                                    Aora!
                                </Text>
                        </Text>

                        <Image 
                        source={images.path} 
                        className="w-[136px] h-[15px] absolute
                        -bottom-2 -right-8"
                        resizeMode='contain'/>
                    </View>

                    <Text
                    className="text-sm text-gray-100 font-pregular mt-7 text-center">
                        Where creativity meets innovation:
                        embark on a journey of limitless exploration with Aora.
                    </Text>

                    <CustomButton
                    title="Continue with Email"
                    handlePress= { () => router.push('/sign-in') }
                    containerStyles= "w-full mt-7"/>
                 </View>
           </ScrollView>
           <StatusBar backgroundColor='#161622'
           style='light'></StatusBar>
        </SafeAreaView>
    )
}


export default Home;