"use client";

import { useEffect, useRef } from "react";
import { GraphCanvas, GraphNode } from "reagraph";

const nodes: GraphNode[] = [
  { id: "상기", label: "상기" },
  { id: "구성", label: "구성" },
  { id: "모듈", label: "모듈" },
  { id: "장치", label: "장치" },
  { id: "공개", label: "공개" },
  { id: "로터", label: "로터" },
  { id: "도면", label: "도면" },
  { id: "제어", label: "제어" },
  { id: "보다", label: "보다" },
  { id: "발명", label: "발명" },
  { id: "하우", label: "하우" },
  { id: "사용", label: "사용" },
  { id: "드론", label: "드론" },
  { id: "휴대", label: "휴대" },
  { id: "실시", label: "실시" },
  { id: "포함", label: "포함" },
  { id: "폭탄", label: "폭탄" },
  { id: "설명", label: "설명" },
];

const edges = [
  { source: "상기", target: "구성", id: "상기-구성", label: "0.31" },
  { source: "모듈", target: "구성", id: "모듈-구성", label: "0.45" },
  { source: "장치", target: "공개", id: "장치-공개", label: "0.11" },
  { source: "장치", target: "구성", id: "장치-구성", label: "0.22" },
  { source: "로터", target: "구성", id: "로터-구성", label: "0.14" },
  { source: "도면", target: "공개", id: "도면-공개", label: "0.58" },
  { source: "제어", target: "구성", id: "제어-구성", label: "0.20" },
  { source: "보다", target: "공개", id: "보다-공개", label: "0.13" },
  { source: "보다", target: "구성", id: "보다-구성", label: "0.04" },
  { source: "발명", target: "공개", id: "발명-공개", label: "0.13" },
  { source: "발명", target: "구성", id: "발명-구성", label: "0.03" },
  { source: "하우", target: "구성", id: "하우-구성", label: "0.26" },
  { source: "사용", target: "공개", id: "사용-공개", label: "0.13" },
  { source: "사용", target: "구성", id: "사용-구성", label: "0.04" },
  { source: "드론", target: "공개", id: "드론-공개", label: "0.13" },
  { source: "드론", target: "구성", id: "드론-구성", label: "0.04" },
  { source: "휴대", target: "공개", id: "휴대-공개", label: "0.14" },
  { source: "휴대", target: "구성", id: "휴대-구성", label: "0.04" },
  { source: "구성", target: "실시", id: "구성-실시", label: "0.05" },
  { source: "구성", target: "구성", id: "구성-구성", label: "0.07" },
  { source: "구성", target: "포함", id: "구성-포함", label: "0.08" },
  { source: "구성", target: "폭탄", id: "구성-폭탄", label: "0.04" },
  { source: "폭탄", target: "공개", id: "폭탄-공개", label: "0.14" },
  { source: "실시", target: "공개", id: "실시-공개", label: "0.17" },
  { source: "설명", target: "공개", id: "설명-공개", label: "0.18" },
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
          labelFontUrl={"/NotoSansKR-Regular.ttf"}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
