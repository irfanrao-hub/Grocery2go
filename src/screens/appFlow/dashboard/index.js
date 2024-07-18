import React from 'react'
import { View, Text, StatusBar, Image } from 'react-native'

import { appIcons, colors } from '../../../services'
import {  Header } from '../../../components';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomInput } from '../../../components/custominput';

const Dashboard = ({ navigation }) => (
  <View style={[styles.container]}>
    <StatusBar backgroundColor={colors.greyLight} barStyle={'dark-content'} />
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.fg1}>
    <View style={styles.wrapper}>

      <View style={styles.head}>
       <Image source={appIcons.location} style={styles.texticon} />
        <Text style={styles.headtext}>
          Dhaka, Banassre
        </Text> 
        <Image source={appIcons.arrowdown} style={styles.texticon} />
      </View>
      <View  style={styles.mainsearchbar}>
      <CustomInput
            placeholder={'Search for Grocery or Shop'}
            leftIcon={appIcons.Search}
            width='75%'
            height={50}
          />
          <View style={styles.notification}>
          <Image source={appIcons.Notification} style={styles.notiicon} />
          </View>
          <View style={styles.heart}>
          <Image source={appIcons.Heart} style={styles.hearticon} />
          </View>
      </View>
      <View style={styles.catogrie}>
        <Text style={styles.catogrietext}>
          Catogories
        </Text>
        <View style={styles.mainitems}>
        <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Fruits</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Vegetables</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Beverages</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Dairys</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Bakery</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Frozen Food</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Meats</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Cleaners</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Paper Good</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Care</Text>
       </View>
       <View style={styles.items}>
        <Image source={appIcons.apple} style={styles.itemicon} />
          <Text style={styles.itemtext}>Pharmacy</Text>
       </View>
        </View>
      </View>

      <View style={styles.slidermain}>
        <View style={styles.grocerytext}>
      <Text style={styles.maintext}>
          Groceries
        </Text>
        <Text style={styles.seealltext}>
          See All
        </Text>
        </View>
        <View style={styles.containerslider}>
          <View style={styles.slider}>
            <View style={styles.mainicon}>
        <Image source={appIcons.apple} style={styles.slidericon} />
            </View>
            <View style={styles.stext}>
            <Text style={styles.ratingtxt}>Red Apple</Text>
            <Text style={styles.weighttxt}>1kg,Priceg</Text>
            </View>
            <View style={styles.additem}>
            <Text style={styles.rate}>$4.99</Text>
            <View style={styles.mainadditem}>
            <Text style={styles.plus}>+</Text>
            </View>
            </View>

          </View>
          <View style={styles.slider}>
            <View style={styles.mainicon}>
        <Image source={appIcons.apple} style={styles.slidericon} />
            </View>
            <View style={styles.stext}>
            <Text style={styles.ratingtxt}>Red Apple</Text>
            <Text style={styles.weighttxt}>1kg,Priceg</Text>
            </View>
            <View style={styles.additem}>
            <Text style={styles.rate}>$4.99</Text>
            <View style={styles.mainadditem}>
            <Text style={styles.plus}>+</Text>
            </View>
            </View>

          </View>
          <View style={styles.slider}>
            <View style={styles.mainicon}>
        <Image source={appIcons.apple} style={styles.slidericon} />
            </View>
            <View style={styles.stext}>
            <Text style={styles.ratingtxt}>Red Apple</Text>
            <Text style={styles.weighttxt}>1kg,Priceg</Text>
            </View>
            <View style={styles.additem}>
            <Text style={styles.rate}>$4.99</Text>
            <View style={styles.mainadditem}>
            <Text style={styles.plus}>+</Text>
            </View>
            </View>

          </View>

        </View>

      </View>
 


    


    </View>
  </KeyboardAwareScrollView>
  </View>
)

export default Dashboard