"use client";

import { useRouter } from "next/navigation";
import {
  IconBook,
  IconChat,
  IconHome,
  IconPerson,
  IconPhone,
} from "@/components/common/icons";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

type propsForFooterTray = {
  showInput?: boolean;
  setIsModalVisible: Function;
  dialogContext: any;
  setDialogContext: Function;
};

export default function FooterTray(props: any) {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  return (
    <div className="mx-auto flex h-[100px] w-full flex-col gap-4 rounded-t-2xl bg-white pt-4">
      {props.showInput ? (
        <div className="flex h-fit w-full flex-row justify-between px-4 pb-4">
          <Input
            radius={"none"}
            placeholder={"질의어를 입력하세요."}
            className="w-full"
            variant={"flat"}
            classNames={{
              input: "text-lg w-[75%] scale-90 text-left",
            }}
            color={"primary"}
            onClear={() => {
              setInputText("");
            }}
            isClearable={false}
            value={inputText}
            onValueChange={(e) => {
              setInputText(e);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                props.setDialogContext([
                  ...props.dialogContext,
                  {
                    isAnimated: false,
                    isSent: true,
                    isLoading: false,
                    imgSrc: "/images/logo.png",
                    // sampleStageData[indexStage].content[currentCardIndex]
                    //   .imgSrc,
                    name: "사용자",
                    text: inputText,
                  },
                ]);
                setInputText("");
              }
            }}
            endContent={
              <Button
                color={"primary"}
                variant={"solid"}
                onPress={() => {
                  props.setDialogContext([
                    ...props.dialogContext,
                    {
                      isAnimated: false,
                      isSent: true,
                      isLoading: false,
                      imgSrc: "/images/logo.png",
                      // sampleStageData[indexStage].content[
                      //   currentCardIndex
                      // ].imgSrc,
                      name: "사용자",
                      text: inputText,
                    },
                  ]);
                  setInputText("");
                }}
              >
                전송
              </Button>
            }
          ></Input>
        </div>
      ) : (
        <div className="flex h-fit w-full flex-row justify-between px-4 pb-6">
          {[
            {
              text: "홈",
              onPress: async () => {
                await props.setIndexOfView(() => 0);
              },
              icon: <IconHome height={25} fill="#000"></IconHome>,
            },
            {
              text: "탐색하기",
              onPress: async () => {
                await props.setIndexOfView(() => 1);
              },
              icon: <IconBook height={25} fill="#000"></IconBook>,
            },
            {
              text: "MiliPat AI",
              onPress: async () => {
                props.setIsModalVisible(true);
              },
              icon: <IconChat height={25} fill="#fff"></IconChat>,
            },
            {
              text: "예약관리",
              onPress: async () => {
                await props.setIndexOfView(() => 3);
              },
              icon: <IconPhone height={25} fill="#000"></IconPhone>,
            },
            {
              text: "내 정보",
              onPress: async () => {
                await props.setIndexOfView(() => 4);
              },
              icon: <IconPerson height={25} fill="#000"></IconPerson>,
            },
          ].map((e, i) => {
            return (
              <Button
                disableRipple
                key={i}
                isIconOnly
                className="h-[55px] w-[55px]"
                variant={
                  i == 2 ? "solid" : i == props.indexOfView ? "flat" : "light"
                }
                radius={i == props.indexOfButton ? "md" : "md"}
                size={"sm"}
                color={i == 2 ? "primary" : "default"}
                onPress={() => {
                  e.onPress();
                }}
              >
                <div className="flex h-fit flex-col items-center justify-center gap-1 text-tiny">
                  {e.icon}
                  <p
                    className={`${
                      i == 2 ? "text-white" : "text-black"
                    } font-bold`}
                  >
                    {e.text}
                  </p>
                </div>
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}
