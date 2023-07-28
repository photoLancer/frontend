

export const login = (userId) => ({
  type: 'LOGIN',
  payload: {
    userId,
  },
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const photoPurchase = (userPoint) => ({
  type: 'PHOTO_PURCHASE',
  payload: {
    userPoint,
  },
});
