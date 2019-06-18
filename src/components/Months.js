import React from 'react';
import '../Months.css';

const Months = (props) => {

  const oneStyle = {
    height: props.clientTotalOne + '%'
  };
  const twoStyle = {
    height: props.clientTotalTwo + '%'
  };
  const threeStyle = {
    height: props.clientTotalThree + '%'
  };
  const fourStyle = {
    height: props.clientTotalFour + '%'
  };
  const fiveStyle = {
    height: props.clientTotalFive + '%'
  };
  // const sixStyle = {
  //   height: props.clientTotalSix + '%'
  // };
  const sevenStyle = {
    height: props.clientTotalSeven + '%'
  };
  const eightStyle = {
    height: props.clientTotalEight + '%'
  };
  const nineStyle = {
    height: props.clientTotalNine + '%'
  };
  const tenStyle = {
    height: props.clientTotalTen + '%'
  };
  const elevenStyle = {
    height: props.clientTotalEleven + '%'
  };
  const twelveStyle = {
    height: props.clientTotalTwelve + '%'
  };
  return (
     <div className="months">
        <div className="months__bar">
          <div className="months__progress" style={oneStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={twoStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={threeStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={fourStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={fiveStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={oneStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={sevenStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={eightStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={nineStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={tenStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={elevenStyle}></div>
        </div>
        <div className="months__bar">
          <div className="months__progress" style={twelveStyle}></div>
        </div>
        <div className="months__title">last 12 months</div>
     </div>

  );
}

export default Months;
