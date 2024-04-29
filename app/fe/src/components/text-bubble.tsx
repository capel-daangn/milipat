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
      className={`space-y-1 flex flex-col w-full py-2 ${
        props.isSent ? "items-end" : "items-start"
      }`}
    >
      <p className="text-pretty text-center break-keep font-bold text-sm">
        {props.isSent ? "사용자" : props.name}
      </p>
      <Card
        className={`w-fit max-w-[90%] h-fit shadow-none border-0 p-3 text-black ${
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
