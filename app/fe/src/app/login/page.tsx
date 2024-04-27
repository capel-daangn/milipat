"use client";

import { Button, Card, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <Card className="h-2/5 max-h-fit w-full max-w-lg">
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <Input
            className="max-w-xs"
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
            className="max-w-xs"
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
          <Button
            className="h-[55px] w-full max-w-xs"
            color="success"
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
