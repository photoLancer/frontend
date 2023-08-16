import React, { createContext, useReducer, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './app.module.css';

import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import MembershipPage from './routes/MembershipPage/MembershipPage';
import CreateAccountPage from './routes/MembershipPage/CreateAccountPage';
import OnboardingPage from './routes/OnboardingPage/OnboardingPage';
import MyprofilePage from './routes/MyProfilePage/MyprofilePage';
import SettingPage from './routes/SettingPage/SettingPage';
import ChatPage from './routes/ChatPage/ChatPage';
import UploadPhoto from './components/UploadPhoto/UploadPhoto';
import AlarmPage from './routes/AlarmPage/AlarmPage';
import { useSelector } from 'react-redux';

export const UploadContext = createContext();
export const UploadDispatchContext = createContext();

const initialUploadState = {
  uploadBtnClick: false,
};

const uploadReducer = (state, action) => {
  switch (action.type) {
    case 'UPLOAD_CLICK':
      return {
        ...state,
        uploadBtnClick: true,
      };
    case 'SCREEN_CLICK':
      return {
        ...state,
        uploadBtnClick: false,
      };
    default:
      throw new Error('Unhandled action');
  }
};

function App() {
  const userState = useSelector((state) => state.user);
  const [uploadingState, uploadingDispatch] = useReducer(
    uploadReducer,
    initialUploadState
  );
  let isLoggedIn = userState.isLoggedIn;
  console.log('a: ', isLoggedIn);
  return (
    <div>
      <div className={styles.appScreen}>
        {uploadingState.uploadBtnClick ? (
          <UploadDispatchContext.Provider value={uploadingDispatch}>
            <UploadPhoto />
          </UploadDispatchContext.Provider>
        ) : (
          ''
        )}
        <UploadDispatchContext.Provider value={uploadingDispatch}>
          <Routes>
            {/* 로그인 X 일 때 접근 가능한 페이지 */}
            <Route
              exact
              path='/login'
              element={isLoggedIn ? <Navigate to='/home' /> : <LoginPage />}
            />
            <Route
              exact
              path='/Membership'
              element={
                isLoggedIn ? <Navigate to='/home' /> : <MembershipPage />
              }
            />
            <Route
              exact
              path='/CreateAccount'
              element={
                isLoggedIn ? <Navigate to='/home' /> : <CreateAccountPage />
              }
            />

            <Route
              exact
              path='/'
              element={
                isLoggedIn ? <Navigate to='/home' /> : <OnboardingPage />
              }
            />

            <Route
              exact
              path='/home'
              element={isLoggedIn ? <HomePage /> : <Navigate to='/login' />}
            />
            <Route
              exact
              path='/profile'
              element={
                isLoggedIn ? <MyprofilePage /> : <Navigate to='/login' />
              }
            />
            <Route
              exact
              path='/chat'
              element={isLoggedIn ? <ChatPage /> : <Navigate to='/login' />}
            />
            <Route
              exact
              path='/setting'
              element={isLoggedIn ? <SettingPage /> : <Navigate to='/login' />}
            />
            <Route
              exact
              path='/alarm'
              element={isLoggedIn ? <AlarmPage /> : <Navigate to='/login' />}
            />
          </Routes>
        </UploadDispatchContext.Provider>
      </div>
    </div>
  );
}

export default App;
