const initialState = {
  userId: 1,
  userName: 'abc',
  userTitle:'Beginner',
  userProfileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC8LH9YxLxyznRum-miHeKOtlHHIXzq-KAA&usqp=CAU',
  userLv: 5,
  userLvExp: 92.4,
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
