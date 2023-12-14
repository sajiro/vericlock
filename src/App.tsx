import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import {
  AuthenticationContextType,
  AuthenticationResponse,
  TestApiError,
} from "./models/models";
import { Login } from "./components/screens/login";
import { defaults } from "./config";
import { RouterComponent } from "./components/layout/route";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100dvh;
`;

const queryClient = new QueryClient();

export function createTestApiError(
  response: Response,
  body: unknown
): TestApiError {
  return {
    response,
    body,
  };
}

export function isTestApiError(err: unknown): err is TestApiError {
  return err instanceof Error && "response" in err && "body" in err;
}

export const AuthenticationContext =
  React.createContext<AuthenticationContextType | null>(null);

export function useAuthentication(): AuthenticationContextType {
  const ctx = React.useContext(AuthenticationContext);
  if (!ctx) {
    throw new Error(
      "AuthenticationContext not found - must be used inside an AuthenticationContext.Provider"
    );
  }

  return ctx;
}

function App() {
  const [authentication, setAuthentication] =
    useState<AuthenticationResponse | null>(null);

  const LoginHandler = (value: AuthenticationResponse) => {
    setAuthentication(value);
  };

  const logout = useCallback(() => {
    setAuthentication(null);
  }, []);

  const authenticationCtx = useMemo(() => {
    return authentication
      ? {
          config: defaults,
          authentication,
          logout,
        }
      : null;
  }, [authentication, logout]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <MainContainer>
        {!authentication ? (
          <Login config={defaults} onLogin={LoginHandler} />
        ) : (
          <AuthenticationContext.Provider value={authenticationCtx}>
            <RouterComponent />
          </AuthenticationContext.Provider>
        )}
      </MainContainer>
    </QueryClientProvider>
  );
}

export default App;
