"use client";

import { useEffect, useRef } from "react";
import { GraphCanvas, GraphNode } from "reagraph";

const nodes: GraphNode[] = [
  { id: "어셈블리", label: "어셈블리" },
  { id: "카메라", label: "카메라" },
  { id: "회전", label: "회전" },
  { id: "신관", label: "신관" },
  { id: "살상", label: "살상" },
  { id: "로터", label: "로터" },
  { id: "폭탄", label: "폭탄" },
  { id: "휴대", label: "휴대" },
  { id: "드론", label: "드론" },
  { id: "제어", label: "제어" },
];
// const nodes: GraphNode[] = [
//   { id: "상기", label: "상기" },
//   { id: "구성", label: "구성" },
//   { id: "모듈", label: "모듈" },
//   { id: "장치", label: "장치" },
//   { id: "공개", label: "공개" },
//   { id: "로터", label: "로터" },
//   { id: "도면", label: "도면" },
//   { id: "제어", label: "제어" },
//   { id: "보다", label: "보다" },
//   { id: "발명", label: "발명" },
//   { id: "하우", label: "하우" },
//   { id: "사용", label: "사용" },
//   { id: "드론", label: "드론" },
//   { id: "휴대", label: "휴대" },
//   { id: "실시", label: "실시" },
//   { id: "포함", label: "포함" },
//   { id: "폭탄", label: "폭탄" },
//   { id: "설명", label: "설명" },
// ];

const edges = [
  {
    source: "어셈블리",
    target: "카메라",
    id: "어셈블리-카메라",
    label: "10.36",
  },
  { source: "어셈블리", target: "회전", id: "어셈블리-회전", label: "10.55" },
  { source: "어셈블리", target: "신관", id: "어셈블리-신관", label: "10.62" },
  { source: "어셈블리", target: "살상", id: "어셈블리-살상", label: "12.00" },
  { source: "어셈블리", target: "로터", id: "어셈블리-로터", label: "16.28" },
  { source: "어셈블리", target: "폭탄", id: "어셈블리-폭탄", label: "16.85" },
  { source: "어셈블리", target: "휴대", id: "어셈블리-휴대", label: "18.02" },
  { source: "어셈블리", target: "드론", id: "어셈블리-드론", label: "20.00" },
  { source: "어셈블리", target: "제어", id: "어셈블리-제어", label: "20.75" },
  { source: "카메라", target: "회전", id: "카메라-회전", label: "10.88" },
  { source: "카메라", target: "신관", id: "카메라-신관", label: "10.95" },
  { source: "카메라", target: "살상", id: "카메라-살상", label: "12.33" },
  { source: "카메라", target: "로터", id: "카메라-로터", label: "16.61" },
  { source: "카메라", target: "폭탄", id: "카메라-폭탄", label: "17.18" },
  { source: "카메라", target: "휴대", id: "카메라-휴대", label: "18.35" },
  { source: "카메라", target: "드론", id: "카메라-드론", label: "20.33" },
  { source: "카메라", target: "제어", id: "카메라-제어", label: "21.08" },
  { source: "회전", target: "신관", id: "회전-신관", label: "11.14" },
  { source: "회전", target: "살상", id: "회전-살상", label: "12.52" },
  { source: "회전", target: "로터", id: "회전-로터", label: "16.80" },
  { source: "회전", target: "폭탄", id: "회전-폭탄", label: "17.37" },
  { source: "회전", target: "휴대", id: "회전-휴대", label: "18.54" },
  { source: "회전", target: "드론", id: "회전-드론", label: "20.52" },
  { source: "회전", target: "제어", id: "회전-제어", label: "21.27" },
  { source: "신관", target: "살상", id: "신관-살상", label: "12.59" },
  { source: "신관", target: "로터", id: "신관-로터", label: "16.87" },
  { source: "신관", target: "폭탄", id: "신관-폭탄", label: "17.44" },
  { source: "신관", target: "휴대", id: "신관-휴대", label: "18.61" },
  { source: "신관", target: "드론", id: "신관-드론", label: "20.59" },
  { source: "신관", target: "제어", id: "신관-제어", label: "21.34" },
  { source: "살상", target: "로터", id: "살상-로터", label: "18.24" },
  { source: "살상", target: "폭탄", id: "살상-폭탄", label: "18.82" },
  { source: "살상", target: "휴대", id: "살상-휴대", label: "19.99" },
  { source: "살상", target: "드론", id: "살상-드론", label: "21.97" },
  { source: "살상", target: "제어", id: "살상-제어", label: "22.71" },
  { source: "로터", target: "폭탄", id: "로터-폭탄", label: "23.09" },
  { source: "로터", target: "휴대", id: "로터-휴대", label: "24.26" },
  { source: "로터", target: "드론", id: "로터-드론", label: "26.25" },
  { source: "로터", target: "제어", id: "로터-제어", label: "26.99" },
  { source: "폭탄", target: "휴대", id: "폭탄-휴대", label: "24.84" },
  { source: "폭탄", target: "드론", id: "폭탄-드론", label: "26.82" },
  { source: "폭탄", target: "제어", id: "폭탄-제어", label: "27.57" },
  { source: "휴대", target: "드론", id: "휴대-드론", label: "27.99" },
  { source: "휴대", target: "제어", id: "휴대-제어", label: "28.74" },
  { source: "드론", target: "제어", id: "드론-제어", label: "30.72" },
];
// const edges = [
//   { source: "상기", target: "구성", id: "상기-구성", label: "0.31" },
//   { source: "모듈", target: "구성", id: "모듈-구성", label: "0.45" },
//   { source: "장치", target: "공개", id: "장치-공개", label: "0.11" },
//   { source: "장치", target: "구성", id: "장치-구성", label: "0.22" },
//   { source: "로터", target: "구성", id: "로터-구성", label: "0.14" },
//   { source: "도면", target: "공개", id: "도면-공개", label: "0.58" },
//   { source: "제어", target: "구성", id: "제어-구성", label: "0.20" },
//   { source: "보다", target: "공개", id: "보다-공개", label: "0.13" },
//   { source: "보다", target: "구성", id: "보다-구성", label: "0.04" },
//   { source: "발명", target: "공개", id: "발명-공개", label: "0.13" },
//   { source: "발명", target: "구성", id: "발명-구성", label: "0.03" },
//   { source: "하우", target: "구성", id: "하우-구성", label: "0.26" },
//   { source: "사용", target: "공개", id: "사용-공개", label: "0.13" },
//   { source: "사용", target: "구성", id: "사용-구성", label: "0.04" },
//   { source: "드론", target: "공개", id: "드론-공개", label: "0.13" },
//   { source: "드론", target: "구성", id: "드론-구성", label: "0.04" },
//   { source: "휴대", target: "공개", id: "휴대-공개", label: "0.14" },
//   { source: "휴대", target: "구성", id: "휴대-구성", label: "0.04" },
//   { source: "구성", target: "실시", id: "구성-실시", label: "0.05" },
//   { source: "구성", target: "구성", id: "구성-구성", label: "0.07" },
//   { source: "구성", target: "포함", id: "구성-포함", label: "0.08" },
//   { source: "구성", target: "폭탄", id: "구성-폭탄", label: "0.04" },
//   { source: "폭탄", target: "공개", id: "폭탄-공개", label: "0.14" },
//   { source: "실시", target: "공개", id: "실시-공개", label: "0.17" },
//   { source: "설명", target: "공개", id: "설명-공개", label: "0.18" },
// ];

export default function ChartNetwork(props: any) {
  const test = useRef(null);
  useEffect(() => {
    console.log(test.current);
  });

  return (
    <div className="relative flex h-full min-h-[400px]">
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
