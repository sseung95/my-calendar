import React from 'react';
import Navigation from '../Navigation/Navigation';
import { LayoutWrapper, Main } from './Layout.styled';
import { LayoutProps } from './Layout.types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Main>{children}</Main>
      <Navigation />
    </LayoutWrapper>
  );
};

export default Layout;
