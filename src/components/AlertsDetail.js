import React from 'react';
import '../AlertsDetail.css';

const AlertsDetail = (props) => {
  console.log(props);
  return (
    <div className="alerts-results">
      <div className="alerts-results__avatar">
        <span className="icon-bell"></span>
      </div>
      <div className="alerts-results__name">{props.alertDetailName}</div>
      <div className="alerts-results__note">{props.alertDetailNote}</div>
      <div className="alerts-results__date">{props.alertDetailDate}</div>
      <div className="alerts-results__importance">{props.alertDetailImportance}<span className="icon-stats-bars2"></span></div>
    </div>
  );
}

export default AlertsDetail;
