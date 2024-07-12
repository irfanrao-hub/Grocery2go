import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  fg1: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,

    paddingBottom: heightPixel(20),
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
  },

  etext: {
    width:widthPixel(390),
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    color: colors.darktext,
  },

  title: {
    fontSize: 20,
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextSemiBold,
  },
  custominput:{
gap:15,
  },

  pv30: {
    paddingVertical: heightPixel(180),
  },
});
