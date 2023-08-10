const initialState = {
  jwt: null,
  userName: '',
  userTitle: '',
  userProfileImg: '',
  userLv: 0,
  userLvExp: 0,
  userPoint: 0,
  num_follower: 0,
  num_post: 0,
  num_following: 0,
  bookmark: null,
  explane: '',
  isLoggedIn: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        jwt: action.payload.jwt,
        userName: action.payload.nickname,
        userTitle: action.payload.title,
        userProfileImg: action.payload.profileUrl,
        userLv: action.payload.level,
        userPoint: action.payload.point,
        num_follower: action.payload.num_follower,
        num_post: action.payload.num_post,
        num_following: action.payload.num_following,
        bookmark: action.payload.bookmark,
        explane: action.payload.explain,
        userLvExp: action.payload.experience,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        jwt: null,
        userName: '',
        userTitle: '',
        userProfileImg: '',
        userLv: 0,
        userLvExp: 0,
        userPoint: 0,
        num_follower: 0,
        num_post: 0,
        num_following: 0,
        bookmark: null,
        explane: '',
        isLoggedIn: false,
      };
    case 'PHOTO_PURCHASE':
      return { ...state, userPoint: action.payload.userPoint };
    default:
      return state;
  }
}

export default userReducer;
