import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export class Address extends Component {
  render() {
    return (
        <SafeAreaView>

      <View>
        <Text>Address</Text>
      </View>
        </SafeAreaView>
    )
  }
}

export default Address