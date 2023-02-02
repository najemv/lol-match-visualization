import "./MapItem.css";
import { MouseEventHandler, useEffect, useState } from "react";
import { isatty } from "tty";
import { TooltipState } from "../Map/Map";

export interface ItemProps {
  position: {
    x: number;
    y: number;
  };
  tooltip: JSX.Element;
  color: string;
  setTooltip: (tooltip: TooltipState) => void;
}

const MapItem = ({position, tooltip, setTooltip, color}: ItemProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setTooltip({
        active: true,
        posX: position.x,
        posY: position.y,
        tooltip: tooltip
      });
    } else {
      setTooltip({
        active: false,
        posX: 0,
        posY: 0,
        tooltip: <div></div>
      });
    }
    
  }, [isActive]);

  const onMouseEnter = (e: React.MouseEvent<SVGCircleElement>) => {
    setIsActive(true);
    setTooltip({
      active: true,
      posX: e.pageX,
      posY: e.pageY - 100,
      tooltip: tooltip
    });
  };

  const onMouseLeave = (e: React.MouseEvent<SVGCircleElement>) => {
    setIsActive(false);
    setTooltip({
        active: false,
        posX: 0,
        posY: 0,
        tooltip: <div></div>
      });
  };

  return (
      <circle
              cx={position.x} cy={position.y}
              r={isActive ? 10 : 5} stroke="white"
              fill={color}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
      >
      </circle>
      
  );
};

export default MapItem;