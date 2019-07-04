// import { addRestaurants } from '../actions'

const initialState = []

export function restaurants(state = initialState, action) {
  if (action.type === 'ADD_RESTAURANTS') {
      return Object.assign({}, state, {
        restaurants: state.restaurants,
      });
    }

  return state
}
