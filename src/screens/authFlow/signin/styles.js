import {StyleSheet,StatusBar} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  fg1: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent:'flex-end',
    paddingHorizontal: widthPixel(20),
    padding:10,
    marginTop: StatusBar.currentHeight,
    marginBottom:10,
    
  },
 
  title: {
    width:widthPixel(388),
    fontSize: 20,
    color: colors.lightBlack,
    fontFamily: 'Poppins-Bold', 
  },
  title2: {
    width:widthPixel(388),
    fontSize: 17,
    color: colors.lightBlack,
    fontFamily:fontFamily.appTextRegular,
  
  },
  custominput:{
    paddingTop:10,
    gap:20,
  },
  forgetcontainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:widthPixel(390),
    marginVertical:5,
  },
  rightmain:{
    flexDirection:'row',

  },
  rectangle: {
   widht:widthPixel(23),
   height:heightPixel(24),
   resizeMode:'contain',
   marginLeft:-20,

  },
  remtext:{
    color: colors.darktext,
    fontSize: 14,
    marginLeft:-20,
    
  },
  forget:{

  },
  forgetText: {
    color: colors.darktext,
    fontSize: 14,
    
  },
  pv30: {
    paddingVertical: heightPixel(80),
  },
  texthead: {
    alignItems: 'center',
    backgroundColor:'red',
    
  },
  dontHaveText: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
    marginTop: -80,
  },
  spanedit: {
    color: colors.theme,
    fontFamily:fontFamily.appTextSemiBold
  },
  ormain:{
    alignItems:'center',
    paddingBottom:10,
   

  },
  ortext: {
    color: colors.darktext,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
   
  },
  rowEvenly: {
    flexDirection: 'row',
    justifyContent:'center',
    justifyContent: 'space-around',
    marginHorizontal:100,
    marginBottom:20,
  },
  socialView: {
    width: widthPixel(60),
    height: heightPixel(60),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 18,
    elevation: 3,
  },
  socialIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
});
