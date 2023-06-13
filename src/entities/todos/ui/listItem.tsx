import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { type IListItemProp } from '../model/types'
import React from 'react'

export default function ListItem ({ item, onDelete }: IListItemProp) {
  return (
        <TouchableHighlight
            style={styles.itemContainer}
            onPress={onDelete}
        >
            <Text style={styles.itemText}>
                {item.text}
            </Text>
        </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    margin: 4,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    textAlign: 'center'
  }
})
