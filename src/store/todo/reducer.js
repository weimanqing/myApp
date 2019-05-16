

import {combineReducers} from 'redux';

const VisibilityFilters = ['SHOW_ALL','SHOW_COMPLETED'];
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}


export function visibilityFilter(state = 'SHOW_ALL',action) {
  console.log('visibilityFilter---')
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    case 'SHOW_COMPLETED':
      return action.filter;
    default:
      return state
  }
}
/***
 * state  初始状态  state 
 * action:{type,data}
 */
export function todos(state = initialState,action) {
  console.log('todo---')

  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo,index) => {
        if(index === action.index) {
          return Object.assign({},todo,{
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}
const todoApp = combineReducers({visibilityFilter,todos});
// export default todoApp;
export default {visibilityFilter,todos}
// export default function todoApp(state = {},action) {
//   return {
//     todos: todos(state.todos,action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter,action)
//   }
// }