import { StyleSheet, View, FlatList } from 'react-native'
import ListItem from './listItem'
import { type RenderItemProps } from '../model/types'
import React from 'react'
import { toJS } from 'mobx'
import { todoStore } from '../model/model'
import { observer } from 'mobx-react'

export const RenderTodos = observer(() => {
  const todos = toJS(todoStore.todos)
  const delTodoHandler = (index: number) => {
    todoStore.delTodo(index)
  }
  const renderItem = ({ item }: RenderItemProps) => (
        <ListItem item={item} onDelete={() => { delTodoHandler(item.index) } } />
  )
  return (
        <View style={styles.listContainer}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </View>

  )
})
const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10
  }
})
