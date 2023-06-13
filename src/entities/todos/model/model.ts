import { configure, makeAutoObservable } from 'mobx'
import { type IList } from './types'
import { listArr } from '../lib/mocks'

configure({
  enforceActions: 'never'
})
class TodoStore {
  todos = listArr
  constructor () {
    makeAutoObservable(this)
  }

  // ---add todos---
  addTodo (text: string) {
    const newItem: IList = { text, index: this.todos.length + 1 }
    this.todos = [newItem, ...this.todos]
  }

  // ---del todos---
  delTodo (index: number) {
    this.todos = this.todos.filter((el) => el.index !== index)
  }
}
export const todoStore = new TodoStore()
