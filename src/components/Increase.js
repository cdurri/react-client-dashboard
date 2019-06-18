import React from 'react';
import '../Increase.css';
import '../fonts.css';

const Increase = (props) => {

  return (
    <div className="increase">
      <div className="increase__header">
        <span className="icon-circle-up"></span>
      </div>
      <div className="increase__body">{props.clientIncrease}</div>
      <div className="increase__footer">increase</div>
    </div>
  );
}

export default Increase;
