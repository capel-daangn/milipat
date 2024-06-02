import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { useCallback } from "react";

export function ChartWordCloud(params: any) {
  const fontSize = useCallback((word: any) => Math.log2(word.value) * 5, []);
  const rotate = useCallback((word: any) => word.value % 180, []);
  const fill = useCallback(
    (d: any, i: any) => scaleOrdinal(schemeCategory10)(i),
    [],
  );
  const onWordClick = useCallback((word: any) => {
    // console.log(`onWordClick: ${word}`);
  }, []);
  const onWordMouseOver = useCallback((word: any) => {
    // console.log(`onWordMouseOver: ${word}`);
  }, []);
  const onWordMouseOut = useCallback((word: any) => {
    // console.log(`onWordMouseOut: ${word}`);
  }, []);
  const data = [
    { text: "제어", value: 69 },
    { text: "로터", value: 67 },
    { text: "휴대", value: 54 },
    { text: "드론", value: 53 },
    { text: "폭탄", value: 49 },
    { text: "회전", value: 39 },
    { text: "모터", value: 3 },
    { text: "수용", value: 356 },
    { text: "살상", value: 34 },
    { text: "신관", value: 32 },
    { text: "배터리", value: 308 },
    { text: "어셈블리", value: 308 },
    { text: "짐벌", value: 30 },
    { text: "카메라", value: 30 },
    { text: "수단", value: 273 },
    { text: "공격", value: 27 },
    { text: "높이", value: 26 },
    { text: "케이스", value: 26 },
    { text: "의하다", value: 242 },
    { text: "나타내다", value: 241 },
    { text: "바라보다", value: 241 },
    { text: "연결", value: 236 },
    { text: "전원", value: 234 },
    { text: "폭발", value: 21 },
    { text: "늘다", value: 209 },
    { text: "단부", value: 208 },
    { text: "기술", value: 2 },
    { text: "오프", value: 20 },
    { text: "동작", value: 199 },
    { text: "부재", value: 199 },
    { text: "한정", value: 196 },
    { text: "송수", value: 193 },
  ];

  return (
    typeof window !== "undefined" && (
      <WordCloud
        data={data}
        // width={500}
        height={500}
        font="Times"
        fontWeight="bold"
        fontSize={fontSize}
        spiral="rectangular"
        rotate={rotate}
        padding={5}
        random={Math.random}
        fill={fill}
        onWordClick={onWordClick}
        onWordMouseOver={onWordMouseOver}
        onWordMouseOut={onWordMouseOut}
      />
    )
  );
}
