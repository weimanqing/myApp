import {createStore,combineReducers} from 'redux';
import {visibilityFilter,todos} from './reducer'
import initState from './state'

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter
  // VisibilityFilters
} from './actions'

let reducer = combineReducers({visibilityFilter,todos});
// initState可以使用服务端传递过来是state进行初始化 window.STATE_FROM_SERVER
let store = createStore(reducer,initState);




export const testStore = () => {
  // 打印初始状态
  console.log('testStore----',store.getState())
  // 每次 state 更新时，打印日志
  // 注意 subscribe() 返回一个函数用来注销监听器
  const unsubscribe = store.subscribe(() => console.log(store.getState()))

  // 发起一系列 action
  store.dispatch(addTodo('Learn about actions'))
  store.dispatch(addTodo('Learn about reducers'))
  store.dispatch(addTodo('Learn about store'))
  store.dispatch(toggleTodo(0))
  store.dispatch(toggleTodo(1))
  store.dispatch(setVisibilityFilter('all'))

  // 停止监听 state 更新
  unsubscribe()
}