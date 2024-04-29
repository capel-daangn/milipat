"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button, Modal, ModalContent, ModalHeader } from "@nextui-org/react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import TextBubble from "@/components/text-bubble";
import FooterTray from "./common/footer-tray";

type propsForModal = {
  isModalVisible: boolean;
  setIsModalVisible: Function;
};

export default function ModalChatbot(props: propsForModal) {
  const [inputText, setInputText] = useState("");
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  // const webcamRef = useRef<any>(null);
  const [dialogContext, setDialogContext] = useState([
    {
      isAnimated: true,
      isSent: false,
      isLoading: false,
      imgSrc: "/images/logo.png",
      name: "둘레 AI",
      text: "어떻게 도와드릴까요?",
    },
  ]);

  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    checkResize();
  }, [isMobile]);

  useEffect(() => {
    if (dialogContext[dialogContext.length - 1].isSent == true) {
      // setIsLoading(true);
      const timer = setTimeout(() => {
        // setIsLoading(false);
        setDialogContext([
          ...dialogContext,
          {
            isAnimated: true,
            isSent: false,
            isLoading: false,
            imgSrc: "11",
            name: "둘레 AI",
            text: "현재 프론트엔드 테스트 과정 중이며, 이로 인해 질의어에 대한 응답을 담당하는 LLM 서버와 연결되어 있지 않습니다. 프론트엔드 개발 및 테스트가 완료되는 대로 다시 연동될 예정입니다.",
            // text: "k9 자주포 사격통제장치에 문제가 발생하셨군요.이런 문제가 발생시에 총 3가지의 조치 방법이 있습니다.\n\n1. 일부 측량계 장치의 과부하로 인한 오류입니다. 이 경우, 장비를 완전히 재부팅하고 다시한번 세팅하셔야합니다.\n\n2. 광학센서 장치의 노후화 문제입니다.\n이 장치의 수명은 약 5년이며, 이 기간이 지났을 경우에는 정비근무대를 통한 교체가 필요합니다.\n\n3. 중앙처리장치와 전원이 접촉 불량인 경우입니다.",
          },
        ]);
      }, 500);
    }
  }, [dialogContext]);

  return (
    <Modal
      isOpen={props.isModalVisible}
      isDismissable
      closeButton={
        <Button
          color={"danger"}
          size={"lg"}
          variant={"light"}
          onPress={() => {
            props.setIsModalVisible(false);
          }}
          disableRipple
        >
          대화 종료
        </Button>
      }
      scrollBehavior={"normal"}
      className={`${isMobile ? "h-[100vh]" : "h-[500px]"}`}
      size={isMobile ? "full" : "md"}
    >
      <ModalContent>
        <div
          className={`${
            mobile ? "pb-4" : ""
          } flex h-full w-full flex-col items-center justify-start `}
          style={{
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            gridTemplateColumns: "1fr",
            gap: "1px",
          }}
        >
          <ModalHeader className="flex flex-col border-b-2">
            둘레 AI 챗봇과 대화하기
          </ModalHeader>
          <div className="flex h-full w-full flex-col items-center overflow-y-scroll px-4 py-4">
            {dialogContext.map((e, i) => {
              return (
                <TextBubble
                  key={i}
                  // indexStage={indexStage}
                  isLoading={false}
                  isAnimated={e.isAnimated}
                  isSent={e.isSent}
                  imgSrc={"1"}
                  name={e.name}
                  text={e.text}
                  isLast={i == dialogContext.length - 1}
                ></TextBubble>
              );
            })}
            <div ref={messageEndRef} className="h-[100px]"></div>
          </div>
          <div className="flex w-full flex-col items-center">
            <FooterTray
              dialogContext={dialogContext}
              setDialogContext={setDialogContext}
              showInput
              setIsModalVisible={props.setIsModalVisible}
            ></FooterTray>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
