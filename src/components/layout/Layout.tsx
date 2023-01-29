import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import { LayoutWrapper, Main } from '@/components/Layout/Layout.styled';
import { LayoutProps } from '@/components/Layout/Layout.types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Main>{children}</Main>
      <Navigation />
    </LayoutWrapper>
  );
};

export default Layout;
