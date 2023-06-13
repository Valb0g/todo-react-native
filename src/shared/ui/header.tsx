import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Header = ({ title }: { title: string }) => {
  return (
        <View style={styles.main}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
})
