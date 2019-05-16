// export const ADD_TODO_action = {type: 'ADD_TODO',text: 'Go to swimming pool'},
//   TOGGLE_TODO_action = {type: 'TOGGLE_TODO',index: 1},
//   SET_VISIBILITY_FILTER_action = {type: 'SET_VISIBILITY_FILTER',filter: 'SHOW_ALL'}
/*
 * action 类型
 */
export const VisibilityFilters = ['SHOW_ALL','SHOW_COMPLETED'];

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export function addTodo(text) {
  return {type: ADD_TODO,text}
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO,index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER,filter}
}