import axios from 'axios';

export const login = (userId) => ({
  type: 'LOGIN',
  payload: {
    userId,
  },
});

export const logout = () => ({
  type: 'LOGOUT',
});
