import styled from "styled-components";

const Container = styled.div`
  padding: "2em";
`;

export function TerribleViewContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
