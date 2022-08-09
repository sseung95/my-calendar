import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  min-width: 375px;
  height: calc(var(--vh, 1vh) * 100);
  padding-top: 4.2rem;
  background: #faf9f9;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.main`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;
