import React from 'react'
import { View, Text, StatusBar, Image } from 'react-native'

import { appIcons, colors } from '../../../services'
import { Header } from '../../../components';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Dashboard = ({ navigation }) => (
  <View style={[styles.container]}>
    <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.fg1}>
    <View style={styles.wrapper}>
      <View Style={styles.head}>
        <Image source={appIcons.location} style={styles.rectangle} />
        <Text style={styles.headtext}>
          Dhaka, Banassre
        </Text>
        <Image source={appIcons.arrowdown} style={styles.rectangle} />
      </View>

    


    </View>
  </KeyboardAwareScrollView>
  </View>
)

export default Dashboard