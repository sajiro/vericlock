import { Link } from "react-router-dom";
import { useAuthentication } from "../../App";
import styled from "styled-components";
import { Button } from "../common/button/button";

const Container = styled.div`
  background-color: #ffff;
  height: fit-content;
  margin: 0.5em 1em 1em;
  padding: 0.75em;
  border-radius: 10px;
`;

const UlContainer = styled.ul`
  list-style-type: none;

  width: 100%;
  padding: 0 0 10px 0;
  margin: 20px 0 0;
  transition: 0.5s;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const LIContainer = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  padding: 0.5em 0;
  a {
    color: #bf4f74;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const CompanyName = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
`;

export function MainMenu() {
  const authCtx = useAuthentication();
  return (
    <Container>
      <img src="./logod.png" alt="logo" width={120} />
      <CompanyName>{authCtx.authentication.companyName}</CompanyName>
      <UlContainer>
        <LIContainer>
          <Link to="/employees">Employees</Link>
        </LIContainer>
        <LIContainer>
          <Link to="/jobs">Jobs</Link>
        </LIContainer>
        <LIContainer>
          <Link to="/serviceItems">Service Items</Link>
        </LIContainer>
        <LIContainer>
          <Button onPress={() => authCtx.logout()} label="Logout" />
        </LIContainer>
      </UlContainer>
    </Container>
  );
}
