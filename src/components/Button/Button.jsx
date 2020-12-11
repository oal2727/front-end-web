import React from "react";
import { func, node, string } from "prop-types";
import StyledButton from "./button.styles";
const Button = ({ onClick, children, variant, type }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <StyledButton type={type} variant={variant} onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
};
Button.propTypes = {
  children: node.isRequired,
  onClick: func,
  variant: string
};
Button.defaultProps = {
  variant: "primary"
};

export default Button;
