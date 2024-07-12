import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fontFamily, widthPixel,} from '../../services';
const Button = props => {
  const {style, disable, onPress, children} = props;
  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}>
        <Text style={styles.label}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    width: widthPixel(390),
    height: 60,
    marginBottom: 5,
  },
  container: {
    width: widthPixel(390),
    height: 60,
    backgroundColor: colors.theme,
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    color: colors.white,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
  },
});

export default Button;
