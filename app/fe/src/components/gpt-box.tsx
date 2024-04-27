import {
  Card,
  CardHeader,
  CardBody,
  Input,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

type propsGptBox = {
  title?: string;
  footerContent?: any;
  initialQuery?: string;
};

const targetText =
  "인공지능 기술은 국방 분야에서 혁신적인 변화를 가져오고 있습니다. 국방 정책 연구 분석에 있어 인공지능은 빅데이터 처리, 예측 분석, 상황 인식 등 다양한 영역에서 활용됩니다. 실시간 정보 수집과 처리 능력을 통해 전술적인 의사결정을 강화하고, 적응력 있는 시스템은 동적인 안보 환경에서 효과적으로 작전을 수행할 수 있습니다. 또한, 인공지능은 사이버 보안과 무인 시스템 개발 등을 통해 국방력을 강화하는 데 핵심적인 역할을 하고 있습니다. 향후 국방 분야에서의 인공지능 활용은 더욱 증가할 것으로 예측되며, 이는 국방 정책 수립과 실행에 새로운 가능성을 제공할 것입니다.";

export default function GptBox(props: propsGptBox) {
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState(targetText);
  const [textQuestion, settextQuestion] = useState(
    `"${props.initialQuery}"에 대해 분석해줘.`,
  );
  const [textTyped, setTextTyped] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const aaa = textOutput.split(" ");
    console.log(aaa);
    const timerId = setInterval(() => {
      if (counter < aaa.length) {
        setTextTyped((state) => {
          const newState = state + " " + aaa[counter];
          setCounter(counter + 1);
          return newState;
        });
      }
    }, 150);

    return () => {
      clearInterval(timerId);
    };
  }, [textTyped, textOutput]);

  return (
    <Card
      className="max-h-[80vh] min-h-[300px] w-full border-none bg-[#99C7FB]/50 p-4 dark:bg-[#99C7FB]/50"
      isBlurred
      shadow="sm"
    >
      <div className="space-y-8 p-4">
        <Input
          size={"sm"}
          color={"primary"}
          variant={"underlined"}
          label="MiliPat-GPT에게 질문하기"
          labelPlacement={"inside"}
          isClearable
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
          onClear={() => {
            setTextInput("");
          }}
          value={textInput}
          classNames={{
            input: "text-[#006FEE]",
            inputWrapper: "border-[#006FEE] hover:border-[#006FEE]",
            label: "text-sm font-bold",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTextTyped("");
              setTextOutput(textInput);
              settextQuestion(textInput);
              setCounter(0);
            }
          }}
        ></Input>
        <div className="space-y-4">
          <p className="text-sm font-bold leading-loose text-[#006FEE]">
            {textQuestion}
          </p>
          <p className="text-sm leading-loose">{textTyped}</p>
        </div>
      </div>
    </Card>
  );
}
