import { registerRootComponent } from 'expo'
import React from 'react'
import { Text, View } from 'react-native'

const Application = () => (
  <View>
    <Text>Hello World!</Text>
  </View>
)

export default registerRootComponent( Application )
