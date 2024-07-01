"use client";

import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { useCallback } from "react";

export default function ChartWordCloud(props: {
  data: any;
  setSeletedWord: Function;
  setIsModalVisible: Function;
}) {
  const fontSize = useCallback((word: any) => Math.log2(word.value) * 5, []);
  // const rotate = useCallback((word: any) => word.value % 180, []);
  const fill = useCallback(
    (d: any, i: any) => scaleOrdinal(schemeCategory10)(i),
    [],
  );
  // const onWordClick = useCallback(async (word: any) => {
  //   // props?.setSeletedWord();
  //   await props.setIsModalVisible(true);
  //   await console.log(`onWordClick: ${word.text}`);
  // }, []);
  // const onWordMouseOver = useCallback((word: any) => {
  //   console.log(`onWordMouseOver: ${word}`);
  // }, []);
  // const onWordMouseOut = useCallback((word: any) => {
  //   console.log(`onWordMouseOut: ${word}`);
  // }, []);
  const data = [
    { text: "게임", value: 370 },
    { text: "기능", value: 350 },
    { text: "기록", value: 410 },
    { text: "매체", value: 280 },
    { text: "방독면", value: 490 },
    { text: "방법", value: 1890 },
    { text: "시뮬레이션", value: 770 },
    { text: "시뮬레이터", value: 360 },
    { text: "시스템", value: 1500 },
    { text: "시험", value: 480 },
    { text: "연동", value: 290 },
    { text: "워게임", value: 600 },
    { text: "제어", value: 420 },
    { text: "제조", value: 240 },
    { text: "컴퓨터", value: 180 },
    { text: "타이어", value: 430 },
    { text: "하중", value: 270 },
    { text: "항공", value: 340 },
    { text: "항공기", value: 510 },
    { text: "훈련", value: 910 },
  ];

  return (
    typeof window !== "undefined" && (
      <WordCloud
        data={props.data}
        // width={500}
        // height={400}
        font="Times"
        fontWeight="bold"
        fontSize={fontSize}
        spiral="rectangular"
        rotate={0}
        // rotate={rotate}
        padding={20}
        random={Math.random}
        fill={fill}
        onWordClick={(event, d) => {
          props.setSeletedWord(d.text);
          props.setIsModalVisible(true);
          console.log(`onWordClick: ${d.text}`);
        }}
        // onWordClick={(word: any) => {
        //   // props?.setSeletedWord();
        //   props?.setIsModalVisible(true);
        //   console.log(`onWordClick: ${word}`);
        // }}
        // onWordClick={onWordClick}
        // onWordMouseOver={onWordMouseOver}
        // onWordMouseOut={onWordMouseOut}
      />
    )
  );
}
