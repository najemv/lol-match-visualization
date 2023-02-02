import { useRef, useState } from "react";
import MapItem, { ItemProps } from "../MapItem/MapItem";
import "./Map.css";

interface MapProps {
  width: number;
  height: number;
  backgroundImage: string;
  items: ItemProps[];
}

export interface TooltipState {
  active: boolean;
  posX: number;
  posY: number;
  tooltip: JSX.Element;
}


const Map = ({width, height, backgroundImage, items}: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    active: false,
    posX: 0,
    posY: 0,
    tooltip: <div></div>
  });

  return (
    <div ref={mapRef}>
      {tooltip.active &&
        <div className="tooltip-container" ref={tooltipRef}
          style={{
            left: `${tooltip.posX + (mapRef.current?.offsetLeft || 0) - (tooltipRef.current?.clientWidth || 0) / 2}px`,
            top: `${tooltip.posY + (mapRef.current?.offsetTop || 0) + 20}px`
          }}
        >
          {tooltip.tooltip}
        </div>
      }
      <svg className="map" width={width} height={height}>
        <image
          width={width} height={height}
          href={backgroundImage}
        />
        {items.map(i => 
          <MapItem 
            position={{
              x: (i.position.x) * width,
              y: (1 - i.position.y) * height
            }}
            color={i.color}
            tooltip={i.tooltip}
            setTooltip={setTooltip}
            key={`${i.position.x} ${i.position.y}`}
          />
          
        )}
      </svg>
    </div>
  );
};

export default Map;