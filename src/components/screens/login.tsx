import { useCallback, useState } from "react";
import { AuthenticationResponse, LoginFormProps } from "../../models/models";
import { authenticate } from "../../service/api";
import { isTestApiError } from "../../App";
import styled from "styled-components";
import { Button } from "../common/button/button";

const InputContainer = styled.div`
  margin-bottom: 1em;
`;

const Container = styled.div`
  align-self: center;
  text-align: center;
  width: 30%;
`;

const LoginForm = styled.div`
  border-radius: 10px;
  background: white;
  padding: 1em;
  margin-top: 1em;
  height: 215px;
  text-align: left;
`;

export function Login({ config, onLogin }: LoginFormProps) {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loggingInState, setLoggingInState] = useState(false);
  const [authentication, setAuthentication] =
    useState<AuthenticationResponse | null>(null);

  const tryLogin = useCallback(async () => {
    setLoggingInState(true);
    try {
      const authResponse = await authenticate(
        config,
        usernameState,
        passwordState
      );

      setAuthentication(authResponse);
      onLogin(authResponse);
    } catch (err) {
      if (isTestApiError(err)) {
        if (err.response.status === 401) {
          alert(`Invalid username or password. Please try again.`);
          return;
        } else if (err.response.status === 403) {
          alert(
            `Your account is not authorized to use this application. Please contact support.`
          );
          return;
        } else {
          alert(
            `Server response code: ${err.response.status} - ${JSON.stringify(
              err.body
            )} There was a problem logging in. Please reload the page and try again. Contact support if the problem persists.`
          );
          return;
        }
      }
      console.error(err);
      alert(
        `There was an unknown problem logging in. Please reload the page and try again. Contact support if the problem persists.`
      );
    } finally {
      setLoggingInState(false);
    }
  }, [usernameState, passwordState, config, onLogin]);

  return (
    <Container>
      <img src="./logod.png" alt="logo" />
      <LoginForm>
        <div>
          {!!loggingInState ? (
            <div>
              <p>Loading...</p>
            </div>
          ) : (
            <div>
              <h2>Login</h2>
              <form data-testid="login-form" onSubmit={tryLogin}>
                <InputContainer>
                  <label htmlFor="username">Username</label>
                  <input
                    name="username"
                    className="input-width"
                    type="text"
                    onChange={(e) => {
                      setUsernameState(e.target.value);
                    }}
                    value={usernameState}
                    placeholder="username"
                  />
                </InputContainer>
                <InputContainer>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    className="input-width"
                    type="password"
                    onChange={(e) => setPasswordState(e.target.value)}
                    value={passwordState}
                    placeholder="password"
                  />
                </InputContainer>
                <div className="align-right">
                  <Button label="Login" />
                </div>
              </form>
            </div>
          )}
        </div>
      </LoginForm>
    </Container>
  );
}
