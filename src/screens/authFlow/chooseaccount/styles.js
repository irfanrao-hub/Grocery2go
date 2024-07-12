import { StyleSheet } from 'react-native';
import { colors, fontFamily, heightPixel, widthPixel } from '../../../services';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:'center'
       
    },
    main:{
        flex:1,
        alignItems:'center',
        position:'absolute',
        left:0,
        right:0,
        top:70,

    },

    headlogo:{
        width:widthPixel(155),
        height:heightPixel(155),
    },
    acctext:{
        color:colors.theme,
        fontFamily: fontFamily.appTextBold,
        fontSize: 16,
        alignSelf: 'flex-start',
        marginVertical:30,
        paddingHorizontal:18,   
    },
    rowEvenly: {
        flex:1,
        width: widthPixel(430),
        height: heightPixel(690),
        alignItems:'center',
        gap:12,
        
        
      },
    socialView: {
        width: widthPixel(390),
        height: heightPixel(128),
        backgroundColor: colors.lightskyblue,
        alignItems: 'center',
        paddingLeft:10,
        borderRadius: 8,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 3,


      
      },
      socialIcon: {
        width: widthPixel(90),
        height: widthPixel(90),
      },
      maintext:{
paddingLeft:15,
      },
      modetitle: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(2),
        color: colors.theme,
      },
      desctext:{
        width: widthPixel(260),
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(1.6),
        color: colors.darktext,
        textAlign:'left',
        paddingTop: 5,
      },
      buttonView: {
    marginVertical:35,
       
      },
   
})