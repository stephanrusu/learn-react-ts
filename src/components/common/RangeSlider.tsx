import React, { useState } from 'react';
import { Range, getTrackBackground } from "react-range";

interface Props {
  default: number[],
  step: number,
  min: number,
  max: number,
  sliderChange: (args: number[]) => void,
}
function RangeSlider(propsParent: Props) {
  const [values, setValues] = useState<number[]>([...propsParent.default]);

  return (
      <Range
        values={[...values]}
        step={propsParent.step}
        min={propsParent.min}
        max={propsParent.max}
        onChange={(values) => { setValues([...values]); propsParent.sliderChange([...values])} }
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="range-slider-el"
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
            className="range-slider-track"
              ref={props.ref}
              style={{
                height: "4px",
                width: "100%",
                borderRadius: "2px",
                background: getTrackBackground({
                  values: values,
                  colors: ["#00d1b2", "#d5d5d5"],
                  min: propsParent.min,
                  max: propsParent.max
                }),
                alignSelf: "center"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="range-slider-thumb"
            style={{
              ...props.style,
              height: "24px",
              width: "36px",
              borderRadius: "4px",
              fontSize: "16px",
              lineHeight: 1,
              fontWeight: 500,
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 4px rgba(85, 85, 85, 0.1)"
            }}
          >
            {values[0]}
          </div>
        )}
      />
  );
};

export default RangeSlider;
