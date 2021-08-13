import React, { useEffect, useRef, useState } from "react";

const AppBeta = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

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
      <h3> App Beta </h3>
      <h3> App Width: {width} px </h3>
      <div className="container-beta">
        <div className="child-app-C">Widget C</div>
        <div className="child-app-B" ref={widgetBContainer}>
          Widget B width: <div>{widgetBWidth} px</div>
        </div>
      </div>
    </>
  );
};

export default AppBeta;
