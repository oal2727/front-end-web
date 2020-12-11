import styled from "styled-components";

const buttonBackground = (props) => {
  let colour = "#2D2AD9";
  switch (props.variant) {
    case "primary":
      colour = "#2D2AD9";
      break;
    case "danger":
      colour = "#EE184B";
      break;
    case "success":
      colour = "#18EE2D";
      break;
    case "warning":
      colour = "#EEA518";
      break;
    default:
      colour = "#2D2AD9";
      break;
  }
  return colour;
};

const StyledButton = styled.button`
  background-color: ${(props) => buttonBackground(props)};
  border: none;
  width: null;
  height: null;
  padding: 10px;
  font-family:"Domine-Regular";
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0, 11);
  outline: none;
  font-weight: 700;
  font-size:18px;
  cursor: pointer;
  color: white;
  width:200px;
`;

export default StyledButton;
