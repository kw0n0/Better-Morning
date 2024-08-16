/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>header</h1>
      </header>
      <main
        css={css`
          flex: 1;
          padding: 20px;
          border: 2px solid midnightblue;
        `}
      >
        <Outlet />
      </main>
      <footer>
        <span>footer</span>
      </footer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  min-height: 100vh;
  margin: 0 auto;
`;
