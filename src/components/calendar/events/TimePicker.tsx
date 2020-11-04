import React, { useState } from "react";
import RangeSlider from "../../common/RangeSlider";

interface Props {
  updateDate: (value: number) => void
}

enum MiddayType {
  AM = "AM",
  PM = "PM"
}

function TimePicker(_props: Props) {
  const [typeMidday, setTypeMidday] = useState("");

  console.info(typeMidday);
  return (
    <div className="time-picker">
      <div className="time-slider">
        <RangeSlider default={[12]} min={1} max={12} step={1} />
        <RangeSlider default={[0]} min={0} max={59} step={1} />
      </div>
      <div className="time-am-pm">
        <div className="time-midday">
          <button type="button"
            className={`button ${typeMidday === MiddayType.AM ? "is-primary" : "is-white"}`}
            onClick={() => setTypeMidday(MiddayType.AM)}
          >
            AM
          </button>
        </div>
        <div className="time-midday">
          <button type="button"
            className={`button ${typeMidday === MiddayType.PM ? "is-primary" : "is-white"}`}
            onClick={() => setTypeMidday(MiddayType.PM)}
          >
            PM
          </button>
        </div>
      </div>
    </div>
  )
};

export default TimePicker;
