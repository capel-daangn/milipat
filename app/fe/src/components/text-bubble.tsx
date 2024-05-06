import { Card, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

type propsForTextBubble = {
  imgSrc: string;
  isLoading: boolean;
  name: string;
  text: string;
  isSent: boolean;
  isAnimated: boolean;
  indexStage?: number;
  isLast: boolean;
};

export default function TextBubble(props: propsForTextBubble) {
  return (
    <div
      className={`flex w-full flex-col space-y-1 py-2 ${
        props.isSent ? "items-end" : "items-start"
      }`}
    >
      <p className="text-pretty break-keep text-center text-sm font-bold">
        {props.isSent ? "사용자" : props.name}
      </p>
      <Card
        className={`h-fit w-fit max-w-[90%] rounded-none border-0 p-3 text-black shadow-none ${
          props.isSent ? "bg-gray-100" : "bg-primary-50"
        } `}
        shadow={"none"}
      >
        {props.isLoading ? (
          <Spinner></Spinner>
        ) : props.isAnimated && props.isLast ? (
          <TypeAnimation
            sequence={[props.text]}
            wrapper="span"
            speed={50}
            repeat={1}
            cursor={false}
            style={{ whiteSpace: "pre-line" }}
          />
        ) : (
          <p>{props.text}</p>
        )}
      </Card>
    </div>
  );
}
