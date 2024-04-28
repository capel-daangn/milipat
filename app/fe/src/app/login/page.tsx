"use client";

import { useIsMobile } from "@/hooks/useMediaQuery";
import { Button, Card, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

  const checkResize = () => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isMobile]);

  return (
    <section
      className="h-screen w-full flex-col"
      style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr auto",
        gridTemplateRows: mobile ? "1fr 1fr" : "1fr",
      }}
    >
      <div className="flex h-full w-full flex-col bg-[url('../../public/images/background-development.jpg')] bg-cover bg-center"></div>
      <Card
        className={`bg-primary-50 h-full max-h-fit w-full p-8 ${
          mobile ? "" : "min-w-[450px]"
        }`}
        radius={"none"}
      >
        <div className="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-center gap-8 px-4">
          <div className="flex w-full flex-col items-center justify-center gap-1">
            <Image
              src={"/images/logo-text-black.png"}
              width={100}
              height={100}
              alt="logo"
              className={`${mobile ? "w-[150px]" : "w-[200px]"}`}
            ></Image>
            <p
              className={`text-center font-bold ${
                mobile ? "text-tiny" : "text-sm"
              }`}
            >
              방산 분야 특허 검색 및 분석 관리를 위한 지능형 플랫폼
            </p>
          </div>
          <div className="flex h-fit w-full flex-col items-center justify-center space-y-4">
            <Input
              fullWidth
              placeholder="아이디"
              type="id"
              value={inputEmail}
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
              isClearable
              onClear={() => {
                setInputEmail("");
              }}
            ></Input>
            <Input
              fullWidth
              placeholder="비밀번호"
              type="password"
              value={inputPassword}
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
              isClearable
              onClear={() => {
                setInputPassword("");
              }}
            ></Input>
          </div>
          <Button
            fullWidth
            className="h-[55px] w-full"
            color={"primary"}
            variant={"shadow"}
            onClick={() => {
              router.push("/search");
            }}
          >
            로그인 하기
          </Button>
        </div>
      </Card>
    </section>
  );
}
