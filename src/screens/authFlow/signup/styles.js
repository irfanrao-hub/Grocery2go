import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    
  },
  fg1: {
    flexGrow: 1,
    marginTop:StatusBar.currentHeight,
  },
  wrapper: {
    paddingHorizontal: widthPixel(20),
  },
 
  title: {
    fontSize: 20,
    color: colors.lightBlack,
    fontFamily: 'Poppins-Bold', 
  },
  title2: {
    fontSize: 17,
    color: colors.lightBlack,
    fontFamily:fontFamily.appTextRegular,
  },
  custominput: {
    gap: 20,
  },
  pv30: {
    paddingVertical: heightPixel(20),
  },
  texthead: {
    alignItems: 'center',
    flex: 1,
    marginTop: -25,
    gap:15,
  },
  dontHaveText: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
    textAlign: 'center',
  },
  spanedit: {
    color: colors.theme,
    fontFamily: fontFamily.appTextSemiBold,
  },
  ortext: {
    color: colors.darktext,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
    paddingBottom:5,
  },
  rowEvenly: {
    flexDirection: 'row',
    justifyContent:'center',
    justifyContent: 'space-around',
    marginVertical:15,
    marginHorizontal: 100,

  },
  socialView: {
    width: widthPixel(60),
    height: heightPixel(60),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 18,
    elevation: 6,
  },
  socialIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
});
