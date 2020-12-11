import React from "react";
const CardUser = ({ children, title_card }) => {
  return (
    <div className="card-login">
      <div className="card-login-container">
        <div className="card-login-head">{title_card}</div>
        <div className="card-login-body">{children}</div>
      </div>
    </div>
  );
};
export default CardUser;
