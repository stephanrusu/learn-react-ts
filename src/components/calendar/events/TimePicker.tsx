import React from 'react';
import RangeSlider from '../../common/RangeSlider';

function TimePicker() {
  return (
    <div>
      <div>
        <RangeSlider default={[12]} min={1} max={12} step={1} />
        <RangeSlider default={[0]} min={0} max={59} step={1} />
      </div>
      <div>
        AM / PM
      </div>
    </div>
  )
};

export default TimePicker;
