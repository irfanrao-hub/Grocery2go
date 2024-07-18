import { StatusBar, StyleSheet } from 'react-native';
import { colors, fontFamily, heightPixel, widthPixel } from '../../../services';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.greyLight,
       
     },
     fg1: {
        flexGrow: 1,
        marginTop:StatusBar.currentHeight,
      },
     wrapper: {
        paddingHorizontal: widthPixel(20),
        
        
    },
     head:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        },
        headtext:{
            color: colors.black, 
            fontFamily:fontFamily.appTextSemiBold,
            fontSize: 18,
        },

        texticon: {
            width:widthPixel(22),
            height:heightPixel(20),
            resizeMode:'contain',
             margin:5,         
           },
           mainsearchbar:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginVertical:10,
            gap:10,
            },
           notification:{
            width:widthPixel(40),
            height:heightPixel(40),
            backgroundColor:colors.lightskyblue,
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center'


           },
           notiicon:{
            width:widthPixel(28),
            height:heightPixel(28),
           },
           heart:{
            width:widthPixel(40),
            height:heightPixel(40),
            backgroundColor:colors.lightskyblue,
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center'
           },
           hearticon:{
            width:widthPixel(28),
            height:heightPixel(28),
           },
           catogrie:{
            width:widthPixel(394),
            height:heightPixel(360),
            // backgroundColor:'green'
           
           },
           catogrietext:{
            color: colors.black, 
            fontFamily:fontFamily.appTextSemiBold,
            fontSize: 20,
            marginTop:10,

           },
           mainitems:{
            flexDirection:'row',
            flexWrap:'wrap',
            gap:4,

           },
           items:{
            width:widthPixel(95),
            height:heightPixel(100),
            justifyContent:'center',
            alignItems:'center',
           },
           itemicon:{
            width:widthPixel(70),
            height:heightPixel(70),
            resizeMode:'center'
           },
           itemtext:{
            color: colors.black, 
            fontFamily:fontFamily.appTextRegular,
            fontSize: 13,
            textAlign:'center',
            width:widthPixel(92),
            height:20,
           },
           slidermain:{
            width:widthPixel(390),
            height:heightPixel(300),

           },
           grocerytext:{
            flexDirection:'row',
            justifyContent:'space-between'
           },
           maintext:{
            color: colors.black, 
            fontFamily:fontFamily.appTextSemiBold,
            fontSize: 20,
            marginTop:10,
           },
           seealltext:{
            color: colors.errorColor, 
            fontFamily:fontFamily.appTextRegular,
            fontSize: 17,
            marginTop:10,
           },
           containerslider:{
            width:widthPixel(410),
            height:heightPixel(250),
            flexDirection:'row',
            gap:15,
           },
           slider:{
            width:widthPixel(175),
            height:heightPixel(230),
            backgroundColor:colors.white,
            borderRadius:15,
            borderColor:colors.grey,
            elevation:3,
           },
           mainicon:{
            width:widthPixel(170),
            height:heightPixel(100),
            justifyContent:'center',
            alignItems:'center'
           },
           slidericon:{
            width:widthPixel(100),
            height:heightPixel(60),
           },
           stext:{
            width:widthPixel(140),
            height:heightPixel(45),
            padding:10,
           },
           ratingtxt:{
            color: colors.black, 
            fontFamily:fontFamily.appTextSemiBold,
            fontSize: 17,
            textAlign:'left',
           },
           weighttxt:{
            color: colors.black, 
            fontFamily:fontFamily.appTextRegular,
            fontSize: 13,
            textAlign:'left',
           },
        additem:{
            width:widthPixel(170),
            height:heightPixel(45),
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10,
            marginTop:10,
        },
        rate:{
            color: colors.black, 
            fontFamily:fontFamily.appTextSemiBold,
            fontSize: 20,
            textAlign:'center',
        },
        mainadditem:{
            width:widthPixel(46),
            height:heightPixel(46),
            backgroundColor:colors.theme,
            borderRadius:15,
            justifyContent:'center',
            alignItems:'center'
        },
        plus:{
            fontFamily:fontFamily.appTextSemiBold,
            fontSize:30,
            color:colors.white,
            textAlign:'center'
        }


})

