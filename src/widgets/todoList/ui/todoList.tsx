import { StyleSheet, View } from 'react-native'
import React from 'react'
import { RenderTodos } from '../../../entities/todos/ui/renderTodos'
import { AddTodoForm } from '../../../entities/todos/ui/addTodoForm'
import { Header } from '../../../shared/ui/header'
import { headerTitle } from '../lib/mocks'

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
