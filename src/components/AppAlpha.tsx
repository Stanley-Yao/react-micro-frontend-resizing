import { useEffect, useState, useRef } from "react";
import React from "react";

const AppAlpha = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  //now you can use the widgetBWidth to pass it down
  const [widgetBWidth, setWidgetBWidth] = useState<number | undefined>();

  const widgetBContainer = useRef<HTMLDivElement>(null);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    setWidgetBWidth(widgetBContainer?.current?.offsetWidth);
  }, [widgetBContainer?.current?.offsetWidth]);

  return (
    <>
      <h3> App Alpha </h3>
      <h3> App Width: {width} px </h3>
      <div className="container-alpha">
        <div className="child-app-A">Widget A</div>
        <div className="child-app-B" ref={widgetBContainer}>
          Widget B width: <div>{widgetBWidth} px</div>
        </div>
      </div>
    </>
  );
};

export default AppAlpha;
