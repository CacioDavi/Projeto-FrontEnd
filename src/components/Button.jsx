import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ $variant }) =>
    $variant === "primary" ? "#C92071" : "#CCCCCC"};

  color: ${({ $variant }) =>
    $variant === "primary" ? "#ffffff" : "#C92071"};

  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
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