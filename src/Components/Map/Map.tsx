import { useEffect, useRef, useState } from "react";

interface MapProps {
  width: number;
  height: number;
  backgroundImage: string;
  items: ItemProps[];
}

interface ItemProps {
  position: {
    x: number;
    y: number;
  };
  text: string;
}

const Map = ({width, height, backgroundImage, items}: MapProps) => {
  const cvgRef = useRef(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  
  //useEffect(() => {
  //  const canvasElement = canvasRef.current as unknown as HTMLCanvasElement;
  //  const context = canvasElement.getContext('2d') as CanvasRenderingContext2D;
  //  setContext(context);
  //  redraw();
  //});


  const redraw = () => {
    items.forEach(i => {
      const img = new Image();
      img.src = "/map.jpg";
      context?.drawImage(img, 0, 0, width, height);
      context?.rect(i.position.x, i.position.y, 10, 10);
      context?.stroke();
    })
  };

  const myComponentStyle = {
    border: 'solid red',
    "backgroundImage": `url(\'${process.env.PUBLIC_URL}map.jpg\')`
  }
  console.log(width, height);
  //<canvas ref={canvasRef} style={myComponentStyle} width={width} height={height}></canvas>
  return (
    <svg ref={cvgRef} style={myComponentStyle} width={width} height={height}>
      <image
        width={width} height={height}
        href={backgroundImage}
        />
        {items.map(i => 
          <circle
            cx={(1 - i.position.x) * width} cy={i.position.y * height}
            r="3" stroke="red"
            onMouseOver={() => console.log(i.text)}
          />
        )}
    </svg>
  );
};

export default Map;