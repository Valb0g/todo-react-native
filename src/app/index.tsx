import { StyleSheet, SafeAreaView } from 'react-native'
import { TodoList } from '../widgets/todoList/ui/todoList'
import React from 'react'

export default function App () {
  return (
      <SafeAreaView style={styles.container}>
          <TodoList/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
