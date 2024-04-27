"use client";

import { IconLogo } from "@/components/common/icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Link,
  Tooltip,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <section>
      {/*  */}
      <div
        className={`absolute top-0 flex w-full min-w-[1200px] flex-row items-center justify-between px-24 py-8 ${
          true ? "bg-black/75" : ""
        }`}
      >
        <div>
          <button
            onClick={() => {
              router.push("/search");
            }}
          >
            <div className="flex flex-row items-end justify-start space-x-2">
              <IconLogo width={"120px"} fill={"white"}></IconLogo>
              <div className="item-start flex h-full flex-col justify-end">
                <p className="select-none text-start text-xs text-white">
                  미래기술강군을 위한,
                </p>
                <p className="select-none text-start text-xs text-white">
                  방산분야 특허 관리 지능형 플랫폼
                </p>
              </div>
            </div>
          </button>
        </div>
        <div></div>
        <div className="flex flex-row items-center justify-end space-x-4">
          <Button
            variant="light"
            disableRipple
            onPress={() => {
              router.push("/");
            }}
          >
            <p className={`font-bold text-white`}>서비스 소개</p>
          </Button>
          <Button
            variant="light"
            disableRipple
            onPress={() => {
              router.push("https://github.com/ziweek/milipat");
            }}
          >
            <p className={`font-bold text-white`}>개발팀 소개</p>
          </Button>
        </div>
      </div>
      {/*  */}
      <div>
        {/* 1 */}
        <div className="flex h-screen flex-col items-center justify-center bg-[url('../../public/images/background-pattern.jpg')] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p
              data-aos={"fade-in"}
              data-aos-duration="1000"
              className="select-none pt-24 text-2xl font-bold text-white"
            >
              방산분야의 혁신을 선도하는 지능형 특허 관리 솔루션
            </p>
            <div
              data-aos={"fade-in"}
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <div className="flex flex-row space-x-4">
                <Button
                  className="hover:-translate-y-1"
                  size={"lg"}
                  variant={"bordered"}
                  onClick={() => {
                    router.push("/search");
                  }}
                >
                  <p className="font-bold text-white">서비스 소개자료</p>
                </Button>
                <Button
                  className="hover:-translate-y-1"
                  size={"lg"}
                  variant={"bordered"}
                  onClick={() => {
                    router.push("/search");
                  }}
                >
                  <p className="font-bold text-white">서비스 체험하기</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex h-screen flex-col items-center justify-center bg-[url('../../public/images/background-fk-21-2.jpeg')] bg-cover bg-center">
          <div
            data-aos={"fade-in"}
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <p className="select-none text-2xl font-bold text-white">
              미래기술강군으로 도약하기 위한 디딤돌
            </p>
            <p className="select-none text-white">
              신속하고 정확한 특허 검색, 통합된 관리 솔루션으로 양질의 특허자산
              확보를 유도
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex h-screen flex-col items-center justify-center space-y-8 bg-white">
          <p className="select-none text-4xl font-bold">핵심기능 소개</p>
          <div
            className="flex min-h-[60vh] w-[90vw] select-none flex-row items-center justify-between"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
            }}
          >
            {[
              { title: "스마트 서치바", text: "sdf" },
              { title: "MiliPat-GPT 서치어드바이저", text: "sdf" },
              { title: "특허문서 분석 대쉬보드", text: "sdf" },
            ].map((content, i) => {
              return (
                <Card key={i} className="h-full p-4" isBlurred>
                  <CardHeader>
                    <p className="text-lg font-bold">{content.title}</p>
                  </CardHeader>
                  <Divider></Divider>
                  <CardBody>
                    <p>{content.text}</p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="flex h-screen flex-col items-center justify-center space-y-8 bg-white">
          <p className="select-none text-4xl font-bold">서비스 아키텍쳐</p>
          <div
            className="flex min-h-[60vh] w-[90vw] select-none flex-row items-center justify-between"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "20px",
            }}
          >
            {[
              {
                title: "활용 데이터셋",
                children: (
                  <Table aria-label="table of dataset" removeWrapper>
                    <TableHeader>
                      <TableColumn>데이터 제공처</TableColumn>
                      <TableColumn>데이터셋</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          publish: "국방부",
                          name: "국방부_국방정보기술표준 목록",
                          link: "",
                        },
                        {
                          publish: "방위사업청",
                          name: "방위사업청_보유 특허목록",
                          link: "",
                        },
                        {
                          publish: "방위사업청",
                          name: "방위사업청_방산업체 지정현황",
                          link: "",
                        },
                        {
                          publish: "방위사업청",
                          name: "방위사업청_국방규격공개 정보",
                          link: "",
                        },
                        {
                          publish: "방위사업청",
                          name: "	방위사업청_군수품 목록화 현황",
                          link: "",
                        },
                        {
                          publish: "AI hub",
                          name: "논문자료 요약",
                          link: "",
                        },
                        {
                          publish: "AI hub",
                          name: "도서자료 요약",
                          link: "",
                        },
                        {
                          publish: "AI hub",
                          name: "특허 지식베이스",
                          link: "",
                        },
                      ].map((row, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell>{row.publish}</TableCell>
                            <TableCell>
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                ),
              },
              {
                title: "시스템 아키텍쳐",
                children: (
                  <div className="flex w-full flex-row">
                    {[
                      {
                        name: "NEXT.js",
                        imgSrc: "/images/logo/nextjs.png",
                        content: "I am a tooltip",
                      },
                      {
                        name: "NEXT.js",
                        imgSrc: "/images/logo/nestjs.png",
                        content: "I am a tooltip",
                      },
                      {
                        name: "NEXT.js",
                        imgSrc: "/images/logo/mysql.png",
                        content: "I am a tooltip",
                      },
                      {
                        name: "NEXT.js",
                        imgSrc: "/images/logo/fastapi.png",
                        content: "I am a tooltip",
                      },
                      {
                        name: "NEXT.js",
                        imgSrc: "/images/logo/chatgptapi.png",
                        content: "I am a tooltip",
                      },
                      {
                        name: "NEXT.js",
                        imgSrc: "/images/logo/docker.png",
                        content: "I am a tooltip",
                      },
                      {
                        name: "NEXT.js",
                        imgSrc: "/images/logo/aws.png",
                        content: "I am a tooltip",
                      },
                    ].map((achitecture, i) => (
                      <Tooltip
                        key={i}
                        showArrow
                        content={
                          <div className="flex flex-col space-y-2">
                            <p className="font-bold">{achitecture.name}</p>
                            <p>{achitecture.content}</p>
                          </div>
                        }
                        placement={"bottom"}
                      >
                        <Card>
                          <Image
                            src={achitecture.imgSrc}
                            width={150}
                            height={50}
                            alt="a"
                          ></Image>
                        </Card>
                      </Tooltip>
                    ))}
                  </div>
                ),
              },
            ].map((content, i) => {
              return (
                <Card key={i} className="h-full p-4" isBlurred>
                  <CardHeader>
                    <p className="text-lg font-bold">{content.title}</p>
                  </CardHeader>
                  <Divider></Divider>
                  <CardBody className="flex flex-col items-center justify-center">
                    {content.children}
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="flex h-screen flex-col items-center justify-center space-y-8 bg-[url('../../public/images/background-whiteboard.jpg')] bg-cover bg-center">
          <p className="select-none text-4xl font-bold text-black">
            서비스 개발 회고
          </p>
          <div
            className="flex min-h-[70vh] w-[80vw] select-none flex-row items-center justify-between"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {[
              {
                name: "김지욱",
                rank: "상병",
                unit: "미8군사령부 본부대대",
                children: (
                  <Table aria-label="table of dataset" removeWrapper>
                    <TableHeader>
                      <TableColumn>데이터 제공처</TableColumn>
                      <TableColumn>데이터셋</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {[1, 2, 3].map((row, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell>Tony Reichert</TableCell>
                            <TableCell>CEO</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                ),
              },
              {
                name: "박병현",
                rank: "상병",
                unit: "미2사단 순환여단",
                children: <></>,
              },
            ].map((content, i) => {
              return (
                <Card key={i} className="h-full p-4">
                  <CardHeader>
                    <div className="flex flex-row items-end justify-end space-x-2 text-black">
                      <p className="text-lg font-bold">{content.name}</p>
                      <p>{content.unit}</p>
                      <p>{content.rank}</p>
                    </div>
                  </CardHeader>
                  <Divider></Divider>
                  <CardBody>
                    <div
                      className="h-full p-2"
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gap: "20px",
                      }}
                    >
                      <Card shadow={"none"} className="bg-transparent p-4">
                        sdf
                      </Card>
                      <Card shadow={"none"} className="bg-transparent p-4">
                        <p>감사합니다.</p>
                      </Card>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
