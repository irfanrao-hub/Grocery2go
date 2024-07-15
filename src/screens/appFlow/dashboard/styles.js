import { StatusBar, StyleSheet } from 'react-native';
import { colors, heightPixel, widthPixel } from '../../../services';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white,
       
     },
     fg1: {
        flexGrow: 1,
        marginTop:StatusBar.currentHeight,
      },
     wrapper: {
        paddingHorizontal: widthPixel(20),
        
        
    },
     head:{
      width:'90%',
justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        backgroundColor:'green',
        },
        headtext:{
            color: colors.black, 
            fontSize: 20,
            backgroundColor:'red'
        },

        rectangle: {
            widht:widthPixel(23),
            height:heightPixel(24),
            resizeMode:'contain',
            backgroundColor:'red',
           
            // marginLeft:-20,
         
           },
  
})