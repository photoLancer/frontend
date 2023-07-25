const initialState = {
  userId: 1,
  isLoggedIn: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, userId: action.payload.userId, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, userId: -1 };
    default:
      return state;
  }
}

export default userReducer;
