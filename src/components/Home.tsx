import React, {Component} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Platform} from 'react-native';
// import RadialGradient from 'react-native-radial-gradient';
import AntIcon from "react-native-vector-icons/AntDesign"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();
import {
  RadialGradient,
  ImageBackgroundPlaceholder
} from 'react-native-image-filter-kit'
import User from './User';
import Address from './Address';
interface IProps {
  navigation?: {
    navigate: React.FC;
  };
}
export class Home extends Component<IProps> {
  render() {
    return (
  <Tab.Navigator 
           screenOptions={{
            headerShown:false
           }}
           >
      <Tab.Screen name="home" component={User}
      options={{
        tabBarIcon:()=><AntIcon name="home" size={hp(4)}/>
      }}
      />
      <Tab.Screen name="address" component={Address} />
    </Tab.Navigator>
    );
  }
}

export default Home;
