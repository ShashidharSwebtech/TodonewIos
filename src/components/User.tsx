import {Text, TouchableOpacity, View,SafeAreaView, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from "react-native-vector-icons/Entypo"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { ImageBackgroundPlaceholder, RadialGradient } from 'react-native-image-filter-kit';
interface IProps {
    navigation?: {
      navigate: React.FC;
    };
  }
export class User extends Component<IProps> {
  render() {
    return (
      <SafeAreaView>
        {/* <RadialGradient
          colors={['red', '#00ff00', 'blue']}
          stops={[0, 0.5, 1]}
          image={
            <ImageBackgroundPlaceholder>
              <TouchableOpacity
            onPress={() => this.props.navigation?.navigate('user')}>
              <AntIcon name="home" size={30}/>
            <Text style={{color: '#000'}}>Home</Text>
          </TouchableOpacity>
            </ImageBackgroundPlaceholder>
          }
        /> */}
        <TouchableOpacity
        style={styles.camerabutton}
        >
        <Entypo name="camera" size={hp(4)} />
        <Text>Camera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default User;
const styles=StyleSheet.create({
  camerabutton:{
backgroundColor:"#"
  }
})