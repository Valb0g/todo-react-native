import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// import { type FormProps } from '../model/types'
import { addTodoBtn, addTodoPlaceholder } from '../lib/mocks'
import { todoStore } from '../model/model'
import { observer } from 'mobx-react'

export const AddTodoForm = observer(() => {
  const [text, setText] = useState('')
  const onChangeText = (text: string) => {
    setText(text)
  }
  const onPressButton = () => {
    todoStore.addTodo(text)
    setText('')
  }
  return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={addTodoPlaceholder}
            />
            <Button title={addTodoBtn} onPress={onPressButton} />
        </View>

  )
})
const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 8
  }
})
