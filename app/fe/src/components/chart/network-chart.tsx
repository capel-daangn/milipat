"use client";

import { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";
import { GraphCanvas, GraphNode } from "reagraph";
import { Noto_Sans_KR } from "next/font/google";

// const ChartNetworkComponent = dynamic(
//   () => import("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Sans+KR&display=swap"),
//   {
//     ssr: false,
//   },
// );
const nodes: GraphNode[] = [
  { id: "상기", label: "상기" },
  { id: "0154301", label: "0154301" },
  { id: "10", label: "10" },
  { id: "100", label: "100" },
  { id: "모듈", label: "모듈" },
  { id: "장치", label: "장치" },
  { id: "제어", label: "제어" },
  { id: "드론", label: "드론" },
  { id: "발명의", label: "발명의" },
  { id: "폭탄", label: "폭탄" },
  { id: "휴대형", label: "휴대형" },
  { id: "로터", label: "로터" },
  { id: "또는", label: "또는" },
  { id: "하우징", label: "하우징" },
  { id: "군사용", label: "군사용" },
  { id: "실시", label: "실시" },
  { id: "있다", label: "있다" },
  { id: "신관", label: "신관" },
  { id: "예에", label: "예에" },
];

const edges = [
  { source: "상기", target: "0154301", id: "상기-0154301", label: "0.14" },
  { source: "상기", target: "10", id: "상기-10", label: "0.15" },
  { source: "상기", target: "100", id: "상기-100", label: "0.14" },
  { source: "모듈", target: "0154301", id: "모듈-0154301", label: "0.09" },
  { source: "모듈", target: "10", id: "모듈-10", label: "0.10" },
  { source: "모듈", target: "100", id: "모듈-100", label: "0.09" },
  { source: "장치", target: "0154301", id: "장치-0154301", label: "0.24" },
  { source: "장치", target: "10", id: "장치-10", label: "0.09" },
  { source: "제어", target: "0154301", id: "제어-0154301", label: "0.17" },
  { source: "드론", target: "10", id: "드론-10", label: "0.08" },
  { source: "드론", target: "100", id: "드론-100", label: "0.08" },
  { source: "발명의", target: "10", id: "발명의-10", label: "0.09" },
  { source: "발명의", target: "100", id: "발명의-100", label: "0.08" },
  { source: "폭탄", target: "10", id: "폭탄-10", label: "0.09" },
  { source: "폭탄", target: "100", id: "폭탄-100", label: "0.08" },
  { source: "휴대형", target: "10", id: "휴대형-10", label: "0.09" },
  { source: "휴대형", target: "100", id: "휴대형-100", label: "0.08" },
  { source: "로터", target: "100", id: "로터-100", label: "0.10" },
  { source: "10", target: "100", id: "10-100", label: "0.12" },
  { source: "10", target: "또는", id: "10-또는", label: "0.11" },
  { source: "10", target: "하우징", id: "10-하우징", label: "0.11" },
  { source: "10", target: "군사용", id: "10-군사용", label: "0.09" },
  { source: "실시", target: "100", id: "실시-100", label: "0.10" },
  { source: "있다", target: "100", id: "있다-100", label: "0.09" },
  { source: "군사용", target: "100", id: "군사용-100", label: "0.08" },
  { source: "0154301", target: "100", id: "0154301-100", label: "0.32" },
  { source: "0154301", target: "신관", id: "0154301-신관", label: "0.10" },
  { source: "0154301", target: "하우징", id: "0154301-하우징", label: "0.29" },
  { source: "100", target: "예에", id: "100-예에", label: "0.11" },
];

export default function ChartNetwork(props: any) {
  const test = useRef(null);
  useEffect(() => {
    console.log(test.current);
  });

  return (
    <div className="relative flex h-full min-h-[300px]">
      {typeof window !== "undefined" ? (
        <GraphCanvas
          ref={test}
          // animated={false}
          nodes={nodes}
          edges={edges}
          labelFontUrl={"https://ey2pz3.csb.app/NotoSansKR-Regular.ttf"}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
