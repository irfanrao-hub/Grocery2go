import React, {useState} from 'react';
import {View, StatusBar, Image, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import { appIcons, colors, routes} from '../../../services';
import { Button } from '../../../components';
const Chooseaccount = ({navigation}) => {
  
    const [selectedId, setSelectedId] = useState(null);
   const modeArray = [
    {
      id: 1,
      title: 'CUSTOMER',
      icon: appIcons.customer,
      description:'Lorem ipsum dolor sit amet consectetur. Semper dui quam adipiscing odio. Quam vitae in.',
      
      onPress: () => setSelectedId(1),
    },
    {
      id: 2,
      title: 'GROCERY OWNER',
      icon: appIcons.owner,
      description:'Lorem ipsum dolor sit amet consectetur. Rhoncus varius.',
     
      onPress: () => setSelectedId(2),
    },
    {
      id: 3,
      title: 'GOAR(DRIVER)',
      icon: appIcons.driver,
      description:'Lorem ipsum dolor sit amet consectetur. Vel convallis in erat elit blandit ut parturient vitae.',
    
      onPress: () => setSelectedId(3),
    },
  ];
  return (
    <View style={[styles.container]}>
      <ImageBackground
      source={appIcons.backgroundimg}
      style={{width: 430, height:932}}>
       <StatusBar translucent backgroundColor="transparent"  barStyle="dark-content"/>  
       </ImageBackground>
       <View style={styles.main}>      
        <Image
        source={appIcons.splash}
        style={styles.headlogo}
      />
      <Text style={styles.acctext}>Choose An Account Type</Text>

      <View style={styles.rowEvenly}>
      {modeArray.map((item, index) => (
              <TouchableOpacity
                onPress={item.onPress}
                key={index}
                style={[
                  styles.socialView,
                  { backgroundColor: item.id === selectedId ? colors.selected : colors.lightskyblue}, 
                ]}>

                <Image source={item.icon} style={styles.socialIcon} />
                <View style={styles.maintext}>
                <Text style={styles.modetitle}>{item.title}</Text>
                <Text style={styles.desctext}>{item.description}</Text>
                </View>
              </TouchableOpacity>  
            ))}
             <View style={styles.buttonView}>
        <Button onPress={() => navigation.navigate(routes.signin)}>
          Continue
        </Button> 
      </View>
          </View>
      </View>
      
         

    </View>
  );
};

export default Chooseaccount;