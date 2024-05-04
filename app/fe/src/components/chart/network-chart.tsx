"use strict";

import { GraphCanvas } from "reagraph";

const nodes = [
  {
    id: "1",
    label: "1",
  },
  {
    id: "2",
    label: "2",
  },
];

const edges = [
  {
    source: "1",
    target: "2",
    id: "1-2",
    label: "1-2",
  },
  {
    source: "2",
    target: "1",
    id: "2-1",
    label: "2-1",
  },
];

export default function ChartNetwork(props: any) {
  return (
    <div className="relative flex h-full min-h-[300px]">
      {typeof window !== "undefined" ? (
        <GraphCanvas nodes={nodes} edges={edges} />
      ) : (
        <></>
      )}
    </div>
  );
}
