"use client";

import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { useState, useEffect } from "react";
import { Button, Card } from "@nextui-org/react";
import HeaderWorkspace from "@/components/layout/header-workspace";
import ThreeRender from "@/components/3d-render";

const data = [1, 2, 3];

export default function Home() {
  // const [topWindowZIndex, setTopWindowZIndex] = useState<number>(
  //   data.length - 1,
  // );
  const [selectedWindowIndex, setSelectedWindowIndex] = useState(
    data.length - 1,
  );
  const [opacity, setOpacity] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [gridSize, setGridSize] = useState<number>(0);

  const handleDragStart = () => {
    setOpacity(true);
  };

  const handleDragEnd = () => {
    setOpacity(false);
  };

  useEffect(() => {
    setHydrated(true);

    var calGridSize = Math.round(window.innerWidth / 50);
    setGridSize(calGridSize);
  }, []);

  // useEffect(() => {
  //   console.log(topWindowZIndex);
  // }, [topWindowZIndex]);

  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center overflow-clip">
      <HeaderWorkspace></HeaderWorkspace>
      <div className="relative flex h-full w-full overflow-clip bg-primary-50">
        {hydrated && (
          <div
            className={`relative h-full w-full`}
            style={{ padding: gridSize }}
          >
            {data.map((e, i) => {
              return (
                <Draggable
                  key={i}
                  onMouseDown={async (e) => {
                    const index = (e.target as any).style.gridArea;
                    await setSelectedWindowIndex(index);
                    e.preventDefault();
                  }}
                  // onDrag={(e, data) => {
                  // }}
                  grid={[gridSize, gridSize]}
                  handle="strong"
                  bounds={"parent"}
                  onStart={handleDragStart}
                  onStop={handleDragEnd}
                >
                  <ResizableBox
                    key={i}
                    width={300}
                    height={300}
                    maxConstraints={[gridSize * 48, gridSize * 48]}
                    draggableOpts={{ grid: [gridSize, gridSize] }}
                    // minConstraints={[300, 300]}
                    // maxConstraints={[500, 500]}
                    className={`absolute h-fit w-full`}
                    style={{
                      top: gridSize,
                      left: gridSize + i * (300 + gridSize),
                      zIndex: selectedWindowIndex == i ? 11 : i,
                      opacity:
                        selectedWindowIndex == i && opacity == true ? 0.75 : 1,
                    }}
                  >
                    <Card key={i} className="absolute h-full w-full p-4">
                      <strong
                        key={i}
                        className="h-full w-full"
                        style={{ gridArea: i }}
                      >
                        sdfsdfsdfsd
                      </strong>
                      {/* {i == 0 && (
                        <ThreeRender src={"/models/k9.glb"}></ThreeRender>
                      )} */}
                    </Card>
                  </ResizableBox>
                </Draggable>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
