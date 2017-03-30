import React, { PropTypes} from 'react';
import './index.css';


const ScrollItem = props => {
  return (
    <div className="item-cont">
      <div className="scroll-item">
        <p>{props.name}</p>
        <p>{props.address}</p>
        <p><i>Wait Time</i>: {props.waitTime}</p>
        <button onClick={() => props.bookTbl()}>book a table</button>
      </div>
    </div>
  );
};

ScrollItem.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  lat: PropTypes.array,
  bookTbl: PropTypes.func,
  waitTime: PropTypes.string,
};

export default ScrollItem;
