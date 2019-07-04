import { ADD_RESTAURANTS } from './actionTypes'

export function addRestaurants(list) {
  return {
    ADD_RESTAURANTS,
    list,
  }
}
