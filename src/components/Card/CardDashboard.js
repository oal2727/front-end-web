import React from "react";
const CardDashboard = ({ children, title_card }) => {
  return (
    <div className="card-login">
      <div className="card-dashboard-container">
        <div className="card-dashboard-head">{title_card}</div>
        <div className="card-dashboard-body">{children}</div>
      </div>
    </div>
  );
};
export default CardDashboard;
