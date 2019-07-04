import { ADD_RESTAURANTS, CLEAR_LIST } from './actionTypes'

export function addRestaurants(list) {
  return {
    type: ADD_RESTAURANTS,
    payload: list,
  }
}

export function clearList() {
  return {
    type: CLEAR_LIST,
  }
}
