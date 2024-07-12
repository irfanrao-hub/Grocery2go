import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigation } from './authFlow'
import { TabNavigator } from './tabFlow/index'
import { routes } from '../constants'

const MyStack = createStackNavigator()
export const MainNavigator = () => {

    return (
        <NavigationContainer >
            <MyStack.Navigator initialRouteName={routes.auth} screenOptions={{ headerShown: false, }}>
                <MyStack.Screen name={routes.auth} component={AuthNavigation} />
                {/* <MyStack.Screen name={routes.tab} component={TabNavigator} /> */}
            </MyStack.Navigator>
        </NavigationContainer>
    )
}
