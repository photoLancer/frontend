import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
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
  const [uploadingState, uploadingDispatch] = useReducer(uploadReducer, initialUploadState);

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
            <Route exact path="/home" element={HomePage()} />
            <Route exact path="/login" element={LoginPage()} />
            <Route exact path="/Membership" element={MembershipPage()} />
            <Route exact path="/CreateAccount" element={CreateAccountPage()} />
            <Route exact path="/" element={OnboardingPage()} />
            <Route exact path="/profile" element={MyprofilePage()} />
            <Route exact path="/chat" element={ChatPage()} />
            <Route exact path="/setting" element={SettingPage()} />
            <Route exact path="/alarm" element={AlarmPage()} />
          </Routes>
        </UploadDispatchContext.Provider>
      </div>
    </div>
  );
}

export default App;
