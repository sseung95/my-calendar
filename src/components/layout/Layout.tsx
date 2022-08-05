/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div css={Container}>
      <main css={Main}>{children}</main>
      <Navigation />
    </div>
  );
};

const Container = css`
  min-width: 375px;
  height: calc(var(--vh, 1vh) * 100);
  padding-top: 4.2rem;
  background: #faf9f9;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = css`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export default Layout;
