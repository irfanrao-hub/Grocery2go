// import React, { useState, useRef } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';
// import { colors, heightPixel, widthPixel } from '../../services';

// const ContactNumberInput = (
//   {
//     layout="first"
//   }
// ) => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const phoneInput = useRef(null);

//   return (
//     <View style={contactStyles.container}>
//       <PhoneInput
//         ref={phoneInput}
//         defaultValue={phoneNumber}
//         defaultCode="+92" 
//         layout={layout}
//         onChangeFormattedText={(text) => {
//           console.log('Formatted text:', text);  
//           setPhoneNumber(text);
//           if (onChangePhoneNumber) {
//             onChangePhoneNumber(text);
//           }
        
//         }}
//         containerStyle={contactStyles.phoneInputContainer}
//         textContainerStyle={contactStyles.textContainer}
//         textInputStyle={contactStyles.textInput}
//       />
     
//     </View>
//   );
// };

// const contactStyles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   phoneInputContainer: {
//     width: '100%',
//     backgroundColor: colors.lightgrey,
//     borderRadius: widthPixel(14),
//     borderWidth: 2,
//     borderColor: colors.lightskyblue,
//     elevation: 0,
//   },
//   textContainer: {
//     backgroundColor: colors.lightgrey,
//     borderRadius: widthPixel(14),
//     borderWidth: 0,
//     elevation: 0,
//   },
//   textInput: {
//     fontSize: 15,
//     fontFamily: 'appTextRegular',
//     color: colors.lightBlack,
//   },
// });

// export default ContactNumberInput;


import React, { useState, useRef } from "react";
import {

  StyleSheet,
  View,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { colors, fontFamily, widthPixel } from "../../services";

const ContactNumberInput = (onChangePhoneNumber ) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
    return (
    
      <View style={styles.container}>
        <View style={styles.wrapper}>
       
        </View>
         
          <PhoneInput
          style={styles.inputTextStyle}
        ref={phoneInput}
        defaultValue={value}
        defaultCode="DM"
        layout="first"
        textInputStyle={[styles.message]}
        textContainerStyle={[styles.textContainerStyle]}
        containerStyle={[styles.containerStyle]}
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
         
        }}
        />
       
      </View>
    
  );
};
export default ContactNumberInput;
const styles = StyleSheet.create({

 
  container: {
   
      // flex: 1,
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      borderWidth:2,
      borderRadius:10,
      borderColor:colors.lightskyblue,
  },
    wrapper: {
      width: '100%',
      alignItems: 'center',
  
    },
    message:{
color:colors.black,
backgroundColor:colors.lightskyblue,
borderRadius:10,


    },
    textContainerStyle:{
color:colors.darktext,
backgroundColor:colors.white,

    },
    containerStyle:{
      backgroundColor:colors.white,
     
  

    },
  //   alignItems: 'center',
  
  //   width:'100%',
  //   paddingHorizontal: widthPixel(10),
  //   borderColor: colors.lightskyblue,
  //   borderWidth:2,
  //   borderRadius:8,
  // },
})