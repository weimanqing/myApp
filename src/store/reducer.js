import {combineReducers} from 'redux'
// 默认值
import defaultState from './state.js'
import {SET_INFO_LIST,SET_PAGE_TITLE} from './action-types';

// 一个reducer就是一个函数
function pageTitle(state = defaultState.pageTitle,action) {
  // 不同的action有不同的处理逻辑
  switch(action.type) {
    case SET_PAGE_TITLE:
      return action.data
    default:
      return state
  }
}

function infoList(state = defaultState.infoList,action) {
  switch(action.type) {
    case SET_INFO_LIST:
      return action.data
    default:
      return state
  }
}

// 导出所有reducer
// export default combineReducers({
//   pageTitle,
//   infoList
// })
export default {
  pageTitle,
  infoList
}