import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors, routes} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const Otpscreen = ({navigation}) => {
  const [otp, setOtp] = useState('');
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} />
      <View style={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View>
            <Text style={styles.etext}>
            Please Verify Your Email 
            </Text>
            <Text style={styles.otptext}>
              {' '}
              For your account security we have just sent an email to “user@email.com” with a  4-digit code. Please copy that code and paste in the below field.
            </Text>
          </View>
          <View style={styles.otpContainerTopView}>
            <OTPInputView
              autoFocusOnLoad={false}
              selectionColor={colors.grey}
              onCodeChanged={code => {
                setOtp(code);
              }}
              style={[styles.otpContainer]}
              codeInputHighlightStyle={{
                borderColor: colors.grey,
                backgroundColor: colors.background,
              }}
              pinCount={4}
              codeInputFieldStyle={styles.otp}
            />
          </View>
          <View style={styles.texthead}>
            <Text
              onPress={() => navigation.navigate()}
              style={styles.dontHaveText}>
              Don’t get one time code ?{' '}
              <Text style={styles.spanedit}>Resend</Text>
            </Text>
          </View>
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate(routes.resetpasword)}>
              Continue
            </Button>
        </View>

          
          </View>
        
      </View>
    </View>
  );
};

export default Otpscreen;
