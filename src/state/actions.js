import { ADD_RESTAURANTS } from './actionTypes'

export function addRestaurants(list) {
  return {
    type: ADD_RESTAURANTS,
    payload: list,
  }
}
