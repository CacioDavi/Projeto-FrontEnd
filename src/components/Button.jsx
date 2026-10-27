
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ $variant }) =>
    $variant === "primary" ? "#991956" : "#CCCCCC"};

  color: ${({ $variant }) =>
    $variant === "primary" ? "#FFFFFF" : "#C92071"};

  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "primary" ? "#C92071" : "#8F8F8F"};

    color: #FFFFFF;
  }
`;

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  return (
    <ButtonStyled
      $variant={variant}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
