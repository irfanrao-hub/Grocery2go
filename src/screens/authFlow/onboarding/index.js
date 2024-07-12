import React, {useRef, useState} from 'react';
import {View, Text, StatusBar, FlatList, Image, Dimensions, ImageBackground} from 'react-native';
import {styles} from './styles';
import {colors, appIcons, routes} from '../../../services';
import Button from '../../../components/button';
const {width} = Dimensions.get('window');
const Onboarding = ({navigation}) => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const listRef = useRef(null);
  const onboardingArray = [
    {
      id: 1,
      image: appIcons.onboard1,
      heading: 'Best Rating',
      headingTwo:
        'Lorem ipsum dolor sit amet consectetur. Cras in eget enim diam. Faucibus purus maecenas faucibus.',
    },
    {
      id: 2,
      image: appIcons.onboard1,
      heading: 'Fast Delivery',
      headingTwo:
        'Lorem ipsum dolor sit amet consectetur. Cras in eget enim diam. Faucibus purus maecenas faucibus.',
    },
    {
      id: 3,
      image: appIcons.onboard1,
      heading: 'Happy Shopping',
      headingTwo:
        'Lorem ipsum dolor sit amet consectetur. Cras in eget enim diam. Faucibus purus maecenas faucibus.',
    },
  ];
  const renderItem = ({item}) => (

    <View style={styles.onboardingItem}>
      <View style={styles.onboardimg}>
      <Image source={item.image} style={styles.onboardingImage} />
      </View>
      <View style={styles.maintextstyle}>
      <Text style={styles.onboardingHeading}>{item.heading}</Text>
      <Text style={styles.onboardingHeadingTwo}>{item.headingTwo}</Text>
      </View>
      </View>
   
  );

  const onScroll = event => {
    newIndex = Math.round(event.nativeEvent.contentOffset.x / 360);
    setcurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
     <ImageBackground
      source={appIcons.backgroundimg}
      style={{width: 430, height:932,position:'absolute'}}>
       <StatusBar translucent backgroundColor="transparent"  barStyle="dark-content"/> 
       </ImageBackground>
      <FlatList
        data={onboardingArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ref={listRef}
      />
      <View style={styles.pagination}>
        {onboardingArray.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
      <View style={styles.buttonView}>
        <Button onPress={() => navigation.navigate(routes.chooseacount)}>
          Next
        </Button> 
      </View>
    </View>
  );
};

export default Onboarding;


