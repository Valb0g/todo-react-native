import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Header } from '../../../shared/ui/header'
import { headerTitle } from '../lib/mocks'
import { AddTodoForm, RenderTodos } from '../../../entities/todos'

export const TodoList = () => {
  return (
        <View style={styles.container}>
            <Header title={headerTitle}/>
            <AddTodoForm/>
            <RenderTodos/>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
