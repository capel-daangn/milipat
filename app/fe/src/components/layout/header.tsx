"use client";

import { Button } from "@nextui-org/react";
import { IconLogo } from "../common/icons";
import { useRouter } from "next/navigation";
import SearchBar from "../search-bar";

type HeaderProps = {
  isLogoVisible?: boolean;
  isSearchBarVisible?: boolean;
  searchedText?: string;
  logoFill?: string;
  textColor?: string;
  isBackgroundVisible?: boolean;
};

export default function Header(props: HeaderProps) {
  const router = useRouter();

  return (
    <div
      className={`absolute top-0 flex w-full min-w-[1200px] flex-row items-center justify-between px-24 py-8 ${
        props.isBackgroundVisible ? "bg-black/75" : ""
      }`}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr 2fr",
        gap: "10px",
      }}
    >
      <div>
        {props.isLogoVisible || props.isLogoVisible == undefined ? (
          <button
            onClick={() => {
              router.push("/search");
            }}
          >
            <IconLogo
              width={"10vw"}
              fill={props.logoFill || "black"}
            ></IconLogo>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div>
        {props.isSearchBarVisible ? (
          <div className="flex w-full flex-col items-center justify-center">
            <SearchBar value={props.searchedText}></SearchBar>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex h-[60px] flex-row items-center justify-end space-x-4">
        <Button
          variant="light"
          disableRipple
          onPress={() => {
            router.push("/");
          }}
        >
          <p className={`font-bold text-${props.textColor || "black"}`}>
            서비스 소개
          </p>
        </Button>
        <Button
          variant="light"
          disableRipple
          onPress={() => {
            router.push("https://github.com/ziweek/milipat");
          }}
        >
          <p className={`font-bold text-${props.textColor || "black"}`}>
            개발팀 소개
          </p>
        </Button>
      </div>
    </div>
  );
}
