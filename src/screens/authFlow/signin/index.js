import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const socialArray = [
    {
      id: 1,
      icon: appIcons.google,
      onPress: () => facebookLogin(),
    },
    {
      id: 2,
      icon: appIcons.ios,
      onPress: () => appleLogin(),
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: colors.white}}>
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
      <View style={[styles.wrapper]}>
        <Text style={[styles.title]}>SIGN IN</Text>
        <Text style={[styles.title2]}>Sign your Account</Text>
        <View>
          <View style={styles.custominput}>
          <CustomInput
            onChangeText={text => setEmail(text)}
            placeholder={'Email ID'}
          />
          <CustomInput
            onPressIcon={() => setShowPassword(!showPassword)}
            secureTextEntry={!showPassword}
            placeholder={'Password'}
            rightIcon={true}
           
          />
          </View>
        </View>

        <View style={styles.forgetcontainer}>
        <View style={styles.rightmain}> 
        <Image source={appIcons.rectangle} style={styles.rectangle}/>
           <Text style={styles.remtext}>Remember</Text></View>
           <View style={styles.forget}>
          <Text
            style={styles.forgetText}
            onPress={() => navigation.navigate(routes.forgetpasword)}>
            Forget Password?
          </Text>
          </View>
        </View>

        <View style={styles.pv30}>
          <Button onPress={() => navigation.navigate(routes.tab)}>Login</Button>
        </View>

        <View style={styles.texthead}>
          <Text
            onPress={() => navigation.navigate(routes.signup)}
            style={styles.dontHaveText}>
            Don’t have an account? <Text style={styles.spanedit}>Sign Up</Text>
          </Text>

        </View>
        <View style={styles.ormain}>
        <Text style={styles.ortext}>Or sign in with</Text>
        </View>
        <View style={styles.rowEvenly}>
       
          {socialArray.map((item, index) => (
            <TouchableOpacity
              onPress={item.onPress}
              key={index}
              style={styles.socialView}>
              <Image source={item.icon} style={styles.socialIcon} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      </KeyboardAwareScrollView>
    </View>
    </SafeAreaView>
  );
};

export default LoginScreen;