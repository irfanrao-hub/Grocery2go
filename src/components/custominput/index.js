import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  colors,
  items,
  fontFamily,
  heightPixel,
  widthPixel,
  appIcons,
} from '../../services';
export const CustomInput = ({
  dropDownShow,
  leftIcon,
  onPressValue,
  dropdownArray,
  eyeValue,
  onPressIcon,
  inputstyle,
  rightloc,
  rightIcon,
  rightcamera,
  width = '100%',
  height = heightPixel(60),
  borderRadius = widthPixel(14),
  backgroundColor = colors.lightgrey,
  borderWidth = 2,
  elevation = 0,
  value,
  placeholder,
  keyboardType,
  editable,
  onChangeText,
}) => {
  
  return (
    <View style={{...styles.formInput, width: width, height: height}}>
      <View
        style={{
          ...styles.input,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          height: height,
          backgroundColor: backgroundColor,
          elevation: elevation,
        }}>
        <Image source={leftIcon} style={styles.leftIcon} />
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => rightIcon && onPressIcon()}>
          <TextInput
            selectionColor={colors.grey}
            style={[styles.inputTextStyle]}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'#C7C7C7'}
            rightIcon={true}
            keyboardType={keyboardType}
            editable={editable}
            onChangeText={onChangeText}
           
          />
        </TouchableOpacity>
        {rightIcon && (
          <TouchableOpacity>
            <Image source={appIcons.eyeshow} style={styles.eyeshow} />
          </TouchableOpacity>
        )}
        {rightloc && (
          <TouchableOpacity >
            <Image style={styles.rightarrow} source={appIcons.addres} />
          </TouchableOpacity>
        )}
        {rightcamera && (
          <TouchableOpacity >
            <Image style={styles.rightarrow} source={appIcons.camera} />
          </TouchableOpacity>
        )}
      </View>
      {dropDownShow && (
        <View style={styles.dropDownView}>
          {dropdownArray.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onPressValue(item.title)}
                key={index}>
                <Text style={styles.dropDownText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownText: {
    fontSize: 30,
    color: colors.grey,
    paddingBottom: heightPixel(20),
  },
  dropDownView: {
    position: 'absolute',
    bottom: -heightPixel(85),
    zIndex: 10,
    width: '100%',
    maxHeight: heightPixel(100),
    paddingVertical: heightPixel(10),
    marginTop: heightPixel(10),
    backgroundColor: '#F5F5F5',
    paddingHorizontal: widthPixel(16),
    borderRadius: widthPixel(8),
    borderWidth: 1,
    borderColor: '#C7C7C7',
  },
  leftIcon: {
    width: widthPixel(24),
    height: widthPixel(24),
    marginRight: widthPixel(10),
    resizeMode: 'contain',
  },
  eyeshow: {
    width: widthPixel(23),
    height: widthPixel(23),
    resizeMode: 'contain',
    tintColor: colors.showcolor,
  },

  inputTextStyle: {
    width: widthPixel(390),
    height:60,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightBlack,
    
    
  },
  icon: {
    width: widthPixel(22),
    height: widthPixel(23),
    resizeMode: 'contain',
  },
  formInput: {
    // paddingBottom: heightPixel(20),
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(10),
    borderColor: colors.lightskyblue,
  },
  rightarrow: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
  },
});
