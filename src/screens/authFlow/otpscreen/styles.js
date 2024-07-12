import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  
   
  },
  fg1: {

    flex:1,
    paddingHorizontal:widthPixel(20),
    justifyContent:'center',

    
  },
  wrapper: {
    
   
   
  
  },
  etext: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.9),
    color: colors.darktext,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: -10,
  },
  otptext:{
    
      fontFamily: fontFamily.appTextRegular,
      fontSize: responsiveFontSize(1.9),
      color: colors.darktext,
      paddingTop: 20,
      paddingBottom: 10,
      marginTop: -10,

  },

  title: {
    marginTop: heightPixel(100),
    paddingBottom: heightPixel(10),
    fontSize: 20,
    color: colors.darktext,
    fontFamily: fontFamily.appTextBold,
  },
  
  otpContainerTopView: {
    height: heightPixel(100),
  },
  otpContainer: {
    width: '100%',
  },
  otp: {
    width: widthPixel(65),
    height: heightPixel(65),
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveFontSize(3),
    paddingBottom: heightPixel(10),
    borderRadius: widthPixel(50),
    color: colors.heading2,
    backgroundColor: colors.lightgrey,
  },
  texthead: {
    alignItems: 'center',
  },
  dontHaveText: {
    color: colors.darktext,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: -5,
  },
  spanedit: {
    color: colors.theme,
  },
  pv30: {
    alignItems:'center',
    marginTop:60,
  },
});
