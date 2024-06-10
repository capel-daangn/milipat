// import { Card, Spinner } from "@nextui-org/react";
// import Image from "next/image";
// import { useState } from "react";
// import { TypeAnimation } from "react-type-animation";

// type propsForTextBubble = {
//   imgSrc: string;
//   isLoading: boolean;
//   name: string;
//   text: string;
//   isSent: boolean;
//   isAnimated: boolean;
//   indexStage?: number;
//   isLast: boolean;
// };

// export default function TextBubble(props: propsForTextBubble) {
//   const [typingStatus, setTypingStatus] = useState("Initializing");

//   return (
//     <div
//       className={`flex w-full flex-col space-y-1 py-2 ${
//         props.isSent ? "items-end" : "items-start"
//       }`}
//     >
//       <p className="text-pretty break-keep text-center text-sm font-bold">
//         {props.isSent ? "사용자" : props.name}
//       </p>
//       <Card
//         radius={"sm"}
//         className={`h-fit gap-2 border-0 p-3 text-black shadow-none ${
//           props.isSent ? "bg-gray-100" : "bg-primary-50"
//         }`}
//         shadow={"none"}
//       >
//         {props.isLoading ? (
//           <Spinner></Spinner>
//         ) : props.isAnimated && props.isLast ? (
//           <TypeAnimation
//             splitter={(str) => str.split(/(?= )/)}
//             sequence={[
//               props.text,
//               () => {
//                 setTypingStatus("Done Typing");
//               },
//             ]}
//             // sequence={[props.text]}
//             wrapper="span"
//             speed={2}
//             repeat={1}
//             cursor={false}
//             style={{ whiteSpace: "pre-line", wordBreak: "keep-all" }}
//           />
//         ) : (
//           <p>{props.text}</p>
//         )}
//       </Card>
//     </div>
//   );
// }

"use client";

import { Button, Card, CircularProgress, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ThreeRender from "./3d-render";
import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

type propsForTextBubble = {
  imgSrc: string;
  isLoading: boolean;
  name: string;
  text: string;
  isSent: boolean;
  isAnimated: boolean;
  indexStage?: number;
  isLast: boolean;
  isSourceContained: boolean;
  dialogContext: any[];
  setDialogContext: Function;
  context: any;
};

export default function TextBubble(props: propsForTextBubble) {
  const [typingStatus, setTypingStatus] = useState("Initializing");

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
        className={`h-fit gap-2 border-0 p-4 text-black shadow-none ${
          props.isSent ? "bg-gray-100" : "bg-primary-50"
        } ${props.context != null && "w-full"}`}
        shadow={"none"}
      >
        {props.isLoading ? (
          <Spinner></Spinner>
        ) : (
          <>
            {props.isAnimated && props.isLast ? (
              <div className="flex flex-col">
                <TypeAnimation
                  splitter={(str) => str.split(/(?= )/)}
                  sequence={[
                    props.text,
                    () => {
                      setTypingStatus("Done Typing");
                    },
                  ]}
                  wrapper="span"
                  speed={1}
                  repeat={1}
                  cursor={false}
                  style={{ whiteSpace: "pre-line" }}
                />
              </div>
            ) : (
              <p>{props.text}</p>
            )}
            {props.context != null && props.context}
            {props.isSourceContained && typingStatus == "Done Typing" && (
              <>
                <div className="flex w-full flex-row flex-wrap justify-end gap-2">
                  <Button
                    size={"md"}
                    color={"primary"}
                    variant={"shadow"}
                    onPress={() => {
                      window.open("https://youtu.be/KiN9jtav13I?t=122");
                      // props.setDialogContext([
                      //   ...props.dialogContext,
                      //   {
                      //     isAnimated: false,
                      //     isSent: false,
                      //     isLoading: false,
                      //     imgSrc: "11",
                      //     name: "테크_챗",
                      //     text: "아래는 메뉴얼 pdf 자료입니다.",
                      //     context: (
                      //       <div className="flex h-[300px] w-full">
                      //         <Document
                      //           file={"/sample2.pdf"}
                      //           // onLoadSuccess={onDocumentLoadSuccess}
                      //           loading={
                      //             <div className="flex h-full w-full flex-col items-center justify-center">
                      //               <CircularProgress></CircularProgress>
                      //             </div>
                      //           }
                      //           className={
                      //             "flex h-full w-full flex-col items-start overflow-x-auto overflow-y-auto"
                      //           }
                      //         >
                      //           <Page
                      //             className={"h-full w-full"}
                      //             pageNumber={49}
                      //             renderMode={"canvas"}
                      //             renderTextLayer={false}
                      //             renderAnnotationLayer={false}
                      //             // height={300}
                      //           />
                      //         </Document>
                      //       </div>
                      //     ),
                      //     // text: "k9 자주포 사격통제장치에 문제가 발생하셨군요.이런 문제가 발생시에 총 3가지의 조치 방법이 있습니다.\n\n1. 일부 측량계 장치의 과부하로 인한 오류입니다. 이 경우, 장비를 완전히 재부팅하고 다시한번 세팅하셔야합니다.\n\n2. 광학센서 장치의 노후화 문제입니다.\n이 장치의 수명은 약 5년이며, 이 기간이 지났을 경우에는 정비근무대를 통한 교체가 필요합니다.\n\n3. 중앙처리장치와 전원이 접촉 불량인 경우입니다.",
                      //   },
                      // ]);
                    }}
                  >
                    시연 영상 보기
                  </Button>
                  {/* <Button
                    size={"md"}
                    color={"primary"}
                    variant={"shadow"}
                    onPress={() => {
                      props.setDialogContext([
                        ...props.dialogContext,
                        {
                          isAnimated: false,
                          isSent: false,
                          isLoading: false,
                          imgSrc: "11",
                          name: "테크_챗",
                          text: "아래는 메뉴얼 pdf 자료입니다.",
                          context: (
                            <div className="flex h-[300px] w-full">
                              <Document
                                file={"/sample2.pdf"}
                                // onLoadSuccess={onDocumentLoadSuccess}
                                loading={
                                  <div className="flex h-full w-full flex-col items-center justify-center">
                                    <CircularProgress></CircularProgress>
                                  </div>
                                }
                                className={
                                  "flex h-full w-full flex-col items-start overflow-x-auto overflow-y-auto"
                                }
                              >
                                <Page
                                  className={"h-full w-full"}
                                  pageNumber={49}
                                  renderMode={"canvas"}
                                  renderTextLayer={false}
                                  renderAnnotationLayer={false}
                                  // height={300}
                                />
                              </Document>
                            </div>
                          ),
                          // text: "k9 자주포 사격통제장치에 문제가 발생하셨군요.이런 문제가 발생시에 총 3가지의 조치 방법이 있습니다.\n\n1. 일부 측량계 장치의 과부하로 인한 오류입니다. 이 경우, 장비를 완전히 재부팅하고 다시한번 세팅하셔야합니다.\n\n2. 광학센서 장치의 노후화 문제입니다.\n이 장치의 수명은 약 5년이며, 이 기간이 지났을 경우에는 정비근무대를 통한 교체가 필요합니다.\n\n3. 중앙처리장치와 전원이 접촉 불량인 경우입니다.",
                        },
                      ]);
                    }}
                  >
                    원문 보기
                  </Button>
                  <Button
                    size={"md"}
                    color={"primary"}
                    variant={"shadow"}
                    onPress={() => {
                      props.setDialogContext([
                        ...props.dialogContext,
                        {
                          isAnimated: false,
                          isSent: false,
                          isLoading: false,
                          imgSrc: "11",
                          name: "테크_챗",
                          text: "아래는 제품의 3D 모델링입니다.",
                          context: (
                            <div className="flex h-[300px] w-full">
                              <ThreeRender
                                src={"/models/samsung_dryer.glb"}
                                scale={150}
                              ></ThreeRender>
                            </div>
                          ),
                          // text: "k9 자주포 사격통제장치에 문제가 발생하셨군요.이런 문제가 발생시에 총 3가지의 조치 방법이 있습니다.\n\n1. 일부 측량계 장치의 과부하로 인한 오류입니다. 이 경우, 장비를 완전히 재부팅하고 다시한번 세팅하셔야합니다.\n\n2. 광학센서 장치의 노후화 문제입니다.\n이 장치의 수명은 약 5년이며, 이 기간이 지났을 경우에는 정비근무대를 통한 교체가 필요합니다.\n\n3. 중앙처리장치와 전원이 접촉 불량인 경우입니다.",
                        },
                      ]);
                    }}
                  >
                    3D 모델링 보기
                  </Button> */}
                </div>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  );
}
