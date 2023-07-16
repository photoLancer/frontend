import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import OnboardingPage from './routes/OnboardingPage/OnboardingPage';
import MyprofilePage from './routes/MyProfilePage/MyprofilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={HomePage()} />
        <Route exact path='/login' element={LoginPage()} />
        <Route exact path='/Onboarding' element={OnboardingPage()} />
        <Route exact path='/profile' element={MyprofilePage()} />
      </Routes>
    </div>
  );
}

export default App;
