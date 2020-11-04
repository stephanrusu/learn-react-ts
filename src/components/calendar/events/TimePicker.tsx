import React from "react";
import RangeSlider from "../../common/RangeSlider";

interface Props {
  updateDate: (value: number) => void
}

function TimePicker(_props: Props) {
  return (
    <div className="time-picker">
      <div className="time-slider">
        <RangeSlider default={[12]} min={1} max={12} step={1} />
        <RangeSlider default={[0]} min={0} max={59} step={1} />
      </div>
      <div className="time-am-pm">
        <div className="time-midday">
          AM
        </div>
        <div className="time-midday">
          PM
        </div>
      </div>
    </div>
  )
};

export default TimePicker;
