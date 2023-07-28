const initialState = {
  userId: 1,
  userName: '',
  userProfileImg: '',
  userLv: 0,
  userLvExp: 0,
  userPoint: 50224,
  isLoggedIn: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, userId: action.payload.userId, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, userId: -1, isLoggedIn: false };
    case 'PHOTO_PURCHASE':
      return { ...state, userPoint: action.payload.userPoint };
    default:
      return state;
  }
}

export default userReducer;
