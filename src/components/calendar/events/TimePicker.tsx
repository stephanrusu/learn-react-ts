import React, { useState } from "react";
import RangeSlider from "../../common/RangeSlider";

interface Props {
  type: string,
  updateDate: (value: TimeDate) => void
}

export enum AmPmType {
  AM = "AM",
  PM = "PM"
}

function TimePicker(props: Props) {
  const [hours, setHours] = useState<number>(12);
  const [minutes, setMinutes] = useState<number>(0);

  const [amPm, setAmPm] = useState<AmPmType>(AmPmType.AM);

  const handleHoursSliderChange = (values: number) => {
    const time: TimeSlider = {
      hours: values,
      minutes,
      ampm: amPm,
    };

    const date: TimeDate = {
      type: props.type,
      time,
    }
    props.updateDate(date);
  }

  const handleMinutesSliderChange = (values: number) => {
    const time: TimeSlider = {
      hours,
      minutes: values,
      ampm: amPm,
    };

    const date: TimeDate = {
      type: props.type,
      time,
    }
    props.updateDate(date);
  }

  const handleAmPmChange = (value: AmPmType) => {
    const time: TimeSlider = {
      hours,
      minutes,
      ampm: value,
    };

    const date: TimeDate = {
      type: props.type,
      time,
    }
    props.updateDate(date);
  }
  return (
    <div className="time-picker">
      <div className="time-slider">
        <RangeSlider default={[12]} min={1} max={12} step={1} sliderChange={(values: number[]) => {setHours(values[0]); handleHoursSliderChange(values[0]); }} />
        <RangeSlider default={[0]} min={0} max={59} step={1} sliderChange={(values: number[]) => {setMinutes(values[0]); handleMinutesSliderChange(values[0]); }} />
      </div>
      <div className="time-am-pm">
        <div className="time-midday">
          <button type="button"
            className={`button ${amPm === AmPmType.AM ? "is-primary" : "is-white"}`}
            onClick={() => { setAmPm(AmPmType.AM); handleAmPmChange(AmPmType.AM); }}
          >
            AM
          </button>
        </div>
        <div className="time-midday">
          <button type="button"
            className={`button ${amPm === AmPmType.PM ? "is-primary" : "is-white"}`}
            onClick={() => { setAmPm(AmPmType.PM); handleAmPmChange(AmPmType.PM); }}
          >
            PM
          </button>
        </div>
      </div>
    </div>
  )
};

export default TimePicker;
