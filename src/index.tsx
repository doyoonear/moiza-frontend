import { css, Global, ThemeProvider } from '@emotion/react';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import NavBar from './components/Navigation/NavBar';
import ChatRoom from './pages/ChatRoom';
import ChatRoomDescription from './pages/ChatRoomDescription';
import Main from './pages/Main';
import baseTheme from './styles/baseTheme';
import './styles/globals.css';
import GlobalStyles from './styles/globalStyles';

function RootWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={baseTheme}>
        <Global
          styles={css`
            ${GlobalStyles}
          `}
        />
        <RecoilRoot>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="chatroom" element={<ChatRoom />} />
              <Route path="starting-chatroom" element={<ChatRoomDescription />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </React.Fragment>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RootWithCallbackAfterRender />);

if (module.hot) {
  module.hot.accept();
}
