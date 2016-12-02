import React, { PropTypes } from 'react';

const PopupTimer = (props) => {
  const { time } = props;
  return (
    <div className="popup-timer">
      {time}
    </div>
  );
};

PopupTimer.propTypes = {
  time: PropTypes.number.isRequired,
};

export default PopupTimer;

