const initialState = {
  userId: 1,
  userName: '',
  userProfileImg: '',
  userLv: 0,
  userLvExp: 0,
  userPoint: 0,
  isLoggedIn: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, userId: action.payload.userId, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, userId: -1, isLoggedIn: false };
    default:
      return state;
  }
}

export default userReducer;
