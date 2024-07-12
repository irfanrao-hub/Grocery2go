import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Forgetpasword = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View>
          <Text style={styles.title}>Forget Password</Text>
            <Text style={styles.etext}>Please enter your email address to request a password reset.
            </Text>
          </View>
          <CustomInput
            onChangeText={text => setAge(text)}
            placeholder={'Email Address'}
            leftIcon={appIcons.attherate}
          />
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate(routes.optscreen)}>
              Continue
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Forgetpasword;
