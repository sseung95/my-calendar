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
      <main>{children}</main>
      <Navigation />
    </div>
  );
};

const Container = css`
  /* min-width: 375px; */
  width: 375px;
  padding-top: 82px;
  background: #faf9f9;
`;

export default Layout;
