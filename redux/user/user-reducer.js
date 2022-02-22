import { SET_CURRENT_USER, LOGOUT_CURRENT_USER, TOGGLE_HIDDEN_MENU, } from "./user-actions";

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };  

    case LOGOUT_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };  
    
    case TOGGLE_HIDDEN_MENU:
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu
      }

    default: 
      return state
  }
}


export default userReducer;