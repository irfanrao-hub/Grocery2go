import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { routes } from '../../constants';
import * as Auth from '../../../screens/authFlow';

const AuthStack = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName={routes.splash} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}>
            <AuthStack.Screen name={routes.splash} component={Auth.Splash} />
            <AuthStack.Screen name={routes.onboarding} component={Auth.Onboarding} />
            <AuthStack.Screen name={routes.chooseacount} component={Auth.Chooseaccount} />
            <AuthStack.Screen name={routes.signin} component={Auth.LoginScreen} />
            <AuthStack.Screen name={routes.signup} component={Auth.SignupScreen} />
            <AuthStack.Screen name={routes.forgetpasword} component={Auth.Forgetpasword} />
            <AuthStack.Screen name={routes.optscreen} component={Auth.Otpscreen} />
            <AuthStack.Screen name={routes.resetpasword} component={Auth.Resetpasword} />



        </AuthStack.Navigator>
    )
}
