import {StyleSheet} from 'react-native';
import {colors, fontFamily, widthPixel, wp} from '../../../services';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  onboardingImage: {
    resizeMode: 'contain',
    width: 360,
    height: 400,
  },
  onboardingItem: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end',
    textAlign:'center',
    width: wp(100),
    // marginVertical:-30,
  },
  onboardimg:{
    width: 400,
    height: 410,
    alignItems:'center',
    justifyContent:'center',

  },
  maintextstyle:{
  width:'90%'
   
  },
  onboardingHeading: {
    fontSize: 26,
    fontFamily:fontFamily.appTextBold,
    padding: 20,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 25,
  },
  onboardingHeadingTwo: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 24,
  },
  pagination: {
    // flex:1,
    width:'60%',
    height:'5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
   
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: '#3F4850',
    marginHorizontal: 1,
  },
  activeDot: {
    backgroundColor:'rgba(207, 36, 10, 1)',
    height: 12,
    width: 12, 
  },
  buttonView: {
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom:70,
   
  },
});
