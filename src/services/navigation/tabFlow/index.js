import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appIcons, colors} from '../../utilities';
import {heightPixel, hp, routes, widthPixel} from '../../constants';
import {Dashboard, List, Ordertracking, Shop} from '../../../screens/appFlow';
import Profile from '../../../screens/appFlow/profile';
const Tab = createBottomTabNavigator();

const tabArray = [
  {route: 'dashboard', icon: appIcons.hometab, component: Dashboard},
  {route: 'shop', icon: appIcons.Buy, component: Shop},
  {route: 'list', icon: appIcons.list, component: List},
  {route: 'tracking', icon: appIcons.track, component: Ordertracking},
  {route: 'profile', icon: appIcons.profileTab, component: Profile},
];
const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <View style={[styles.btn]}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={item.icon}
            style={[
              styles.tabIcon,
              {tintColor: focused ? colors.theme : colors.lightBlack},
            ]}
          />
          {focused && <View style={styles.tabbottom}></View>}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={routes.dashboard}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.barStyle,
        elevation: 5,
      }}>
      {tabArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.background,
    height: hp(8),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
    borderRadius: 8,
  },
  tabIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  tabbottom: {
    width: widthPixel(24),
    height: heightPixel(8),
    backgroundColor: colors.theme,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
