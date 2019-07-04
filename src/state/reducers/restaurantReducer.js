const initialState = {
  list: []
}

export function restaurants(state = initialState, action) {
  if (action.type === 'ADD_RESTAURANTS') {
      return {
        ...state,
        list: state.list.concat(action.payload),
      }
    }

  return state
}
