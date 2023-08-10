import axios from 'axios';

export const login = async (jwt) => {
  const user_info = await axios.get(
    'http://photolancer.shop/api/v1/users/info',
    {
      headers: {
        Authorization: `${jwt}`,
      },
    }
  );
  console.log(user_info);
  return {
    type: 'LOGIN',
    payload: {
      jwt: jwt,
      level: user_info.data.level,
      point: user_info.data.point,
      nickname: user_info.data.nickname,
      profileUrl: user_info.data.profileUrl,
      title: user_info.data.title,
      num_follower: user_info.data.num_follower,
      num_post: user_info.data.num_post,
      num_following: user_info.data.num_following,
      bookmark: user_info.data.bookmark,
    },
  };
};

export const logout = () => ({
  type: 'LOGOUT',
});

export const photoPurchase = (userPoint) => ({
  type: 'PHOTO_PURCHASE',
  payload: {
    userPoint,
  },
});
