import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'
import { Image } from 'react-native'

/*
Functional component that returns a view
representing the the tab bar icon and name.
This generates a tab layout that accepts the
properties {icon, color, name, focused} used
to determine behavior of the element.
*/
const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode= 'contain'
                tintColor= {color}
                className= "w-6 h-6"
            />
            <Text className= { `${focused ? 'font-psemibold' : 'font-pregular' } text-xs` }
                style= {{color: color}}>
                {name}
            </Text>
        </View>
    )
}
const TabsLayout = () => {
    /* 
    Tabs element looks at the (tabs) folder
    to find the jsx files for the page 
    associated with each tab.
    */
  return (
    <>
        <Tabs
        screenOptions={{
            //Hides the label so that only the name defined
            //in tabs.screen is showing
            tabBarShowLabel: false,
            //Defines the color of the tab when selected
            tabBarActiveTintColor: '#FFA001',
            //Defines the color of the tab when unselected
            tabBarInactiveTintColor: '#CDCDE0',
            //Adds styling to the tabs
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
            }
        }}>
            <Tabs.Screen
                name= "home"
                options = {{
                    title: 'Home',
                    headerShown: 'false',
                    tabBarIcon: ({color, focused }) => (
                        /*
                        Using the functional component defined
                        on line 11 to generate a view for the
                        bottom tab bar option.
                        */
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name= "bookmark"
                options = {{
                    title: 'Bookmark',
                    headerShown: 'false',
                    tabBarIcon: ({color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmark"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name= "create"
                options = {{
                    title: 'Create',
                    headerShown: 'false',
                    tabBarIcon: ({color, focused }) => (
                        <TabIcon
                            icon={icons.plus}
                            color={color}
                            name="Create"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name= "profile"
                options = {{
                    title: 'Profile',
                    headerShown: 'false',
                    tabBarIcon: ({color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout