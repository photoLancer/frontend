import { createContext, useReducer } from 'react';

const initialUserState = {
  userId: 10, // 기본값 설정
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userId: action.id,
      };
    case 'LOGOUT':
      return {
        ...state,
        userId: -1,
      };
    default:
      throw new Error('Unhandled action');
  }
};

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userState, userStateDispatch] = useReducer(
    userReducer,
    initialUserState
  );

  return (
    <UserContext.Provider value={{ userState, userStateDispatch }}>
      {children}
    </UserContext.Provider>
  );
}
