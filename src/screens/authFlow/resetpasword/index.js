import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Resetpasword = ({navigation}) => {
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
          <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.etext}>Your password must be different from previous password.
            </Text>
          </View>
          <View style={styles.custominput}>
          <CustomInput
            onChangeText={text => setAge(text)}
            placeholder={'Password'}
            rightIcon={true}
            leftIcon={appIcons.attherate}
          />
           <CustomInput
            onChangeText={text => setAge(text)}
            placeholder={'Reset Password'}
            rightIcon={true}
            leftIcon={appIcons.attherate}
          />
          </View>
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate()}>
              Continue
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Resetpasword;
