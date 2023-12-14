import styled from "styled-components";

type ButtonProps = {
  onPress?: () => void;
  label: string;
};
const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e97b23;
  border: none;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
`;

export const Button = ({ onPress, label }: ButtonProps) => {
  return <ButtonWrapper onClick={onPress}>{label}</ButtonWrapper>;
};
