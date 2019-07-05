const initialState = {
  displayList: [],
  list: [],
}

export function restaurants(state = initialState, action) {
  switch(action.type) {
    case 'ADD_RESTAURANTS':
      return {
        ...state,
        list: state.list.concat(action.payload),
      }
    case 'CLEAR_LIST':
      return {
        ...state,
        list: [],
      }
    case 'ADD_DISPLAYLIST':
      return {
        ...state,
        displayList: action.payload,
      }
    default:
      return state
  }
}
