import React from "react";
import { MainMenu } from "./main-menu";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Main = styled.div`
  height: fit-content;
  background-color: white;
  margin: 0.5em 0 1em;
  border-radius: 10px;
  padding: 1em;
  width: 80vh;
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <MainMenu />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
