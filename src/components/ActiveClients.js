import React from 'react';
import '../ActiveClients.css';

const ActiveClients = (props) => {
  console.log(props);
  const totalProgress = (props.clientNum/(300/100));
  const progressStyle = {
    width: totalProgress + '%'
  };
  return (
    <div className="active-clients">
      <div className="active-clients__bar progress-10">
        <div className="active-clients__progress" /*style={progressStyle}*/></div>
      </div>
      <div className="active-clients__total">{props.clientNum}</div>
      <div className="active-clients__title">active clients</div>
    </div>
  );
}

export default ActiveClients;
