import React, {useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {appIcons, colors, routes} from '../../../services';
import {Header, Button, ContactNumberInput} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-number-input';
import {TouchableOpacity} from 'react-native-gesture-handler';
const SignupScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Header leftIcon={true} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <Text style={styles.title}>SIGN UP</Text>
        <Text style={[styles.title2]}>Sign your Account</Text>

          <View style={styles.custominput}>
            <CustomInput
              onChangeText={text => setName(text)}
              placeholder={'First Name'}
              leftIcon={appIcons.profile}
            />
             <CustomInput
              onChangeText={text => setName(text)}
              placeholder={'Last Name'}
              leftIcon={appIcons.profile}
            />
               <ContactNumberInput onChangePhoneNumber={setPhoneNumber} />
           
            <CustomInput
              placeholder={'Password'}
              leftIcon={appIcons.lock}
              rightIcon={true}
              onChangeText={text => setPassword(text)}
            />

            <CustomInput
              placeholder={'Confirm Password'}
              leftIcon={appIcons.lock}
              rightIcon={true}
              onChangeText={text => setConfirmPassword(text)}
            />
             <CustomInput
              placeholder={'Address'}
              leftIcon={appIcons.lock}
              rightloc={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.pv30} >
            <Button onPress={() => navigation.navigate(routes.accountsetup)}>
              SIGN UP
            </Button>
          </TouchableOpacity>
          <View style={styles.texthead}>
            <Text
              onPress={() => navigation.navigate(routes.signin)}
              style={styles.dontHaveText}>
              Already have an account?{' '}
              <Text style={styles.spanedit}>SIGN IN</Text>
            </Text>
            <Text style={styles.ortext}>Or sign up with</Text>
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
  );
};

export default SignupScreen;
