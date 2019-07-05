import {
  ADD_RESTAURANTS, ADD_DISPLAYLIST, CLEAR_LIST,
} from './actionTypes'

export function addRestaurants(list) {
  return {
    type: ADD_RESTAURANTS,
    payload: list,
  }
}

export function addDisplayList(list) {
  return {
    type: ADD_DISPLAYLIST,
    payload: list,
  }
}

export function clearList() {
  return {
    type: CLEAR_LIST,
  }
}
