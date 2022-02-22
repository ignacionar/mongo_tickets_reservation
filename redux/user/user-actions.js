export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const TOGGLE_HIDDEN_MENU = 'TOGGLE_HIDDEN_MENU';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

export const toggleHiddenMenu = () => ({
  type: TOGGLE_HIDDEN_MENU
})

