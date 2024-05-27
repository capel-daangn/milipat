"use client";

import {
  Tabs,
  Tab,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { IconLogo } from "../common/icons";
import { useRouter } from "next/navigation";
import SearchBar from "../search-bar";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";

type HeaderProps = {
  isLogoVisible?: boolean;
  isSearchBarVisible?: boolean;
  searchedText?: string;
  logoFill?: string;
};

export default function Header(props: HeaderProps) {
  const router = useRouter();
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

  const [indexOfViews, setIndexOfViews] = useState<string>("search");
  const queryIndexOfViews = useQuery({
    queryKey: ["indexOfViews"],
    queryFn: () => indexOfViews,
  });

  return (
    <div
      className={`${
        props.isSearchBarVisible == true ? "" : "absolute"
      } top-0 z-50 mx-auto flex w-full max-w-[1200px] flex-row items-center justify-between p-4 px-4 pt-8`}
      style={{
        display: "grid",
        gridTemplateColumns: props.isSearchBarVisible
          ? mobile
            ? "auto 1fr auto"
            : "auto 600px 1fr auto"
          : "auto 1fr auto",
        gridTemplateRows: props.isSearchBarVisible
          ? mobile
            ? "3fr"
            : "2fr"
          : "1fr",
        gap: mobile ? "15px" : "20px",
      }}
    >
      {props.isSearchBarVisible &&
        (mobile ? (
          <>
            <button
              onClick={async () => {
                await setIndexOfViews("search");
                await queryIndexOfViews.refetch();
                await router.push("/home");
              }}
              className="w-fit"
            >
              <IconLogo height={20} fill="#000"></IconLogo>
            </button>
            <div className="col-span-1 w-full"></div>
            <UserDropdown></UserDropdown>

            <div className="col-span-3 flex w-full flex-col items-center justify-center">
              <SearchBar value={props.searchedText}></SearchBar>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={async () => {
                await setIndexOfViews("search");
                await queryIndexOfViews.refetch();
                await router.push("/home");
              }}
              className="w-fit"
            >
              <IconLogo width={100} fill="#000"></IconLogo>
            </button>
            <div className="flex w-full flex-col items-center justify-center">
              <SearchBar value={props.searchedText}></SearchBar>
            </div>
            <div className="col-span-1"></div>
            <UserDropdown></UserDropdown>
          </>
        ))}

      {/*  */}
      {props.isSearchBarVisible == false && (
        <>
          <ViewTabs
            setIndexOfViews={setIndexOfViews}
            queryIndexOfViews={queryIndexOfViews}
          ></ViewTabs>

          <div></div>

          <UserDropdown></UserDropdown>
        </>
      )}
    </div>
  );
}

function ViewTabs(props: any) {
  return (
    <Tabs
      aria-label="Options"
      variant={"underlined"}
      color={"primary"}
      onSelectionChange={async (key: any) => {
        await props.setIndexOfViews(key);
        await props.queryIndexOfViews.refetch();
      }}
    >
      <Tab key="search" title="탐색 뷰"></Tab>
      <Tab key="analysis" title="분석 뷰"></Tab>
      <Tab key="chatbot" title="챗봇 뷰"></Tab>
    </Tabs>
  );
}

function UserDropdown(props: any) {
  return (
    <Dropdown placement={"bottom-end"} className="min-w-fit">
      <DropdownTrigger className="min-w-fit">
        <Avatar
          size={"sm"}
          isBordered
          as="button"
          className="min-w-fit transition-transform"
          // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant={"shadow"}>
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">밀라팻 관리자</p>
          <p className="font-semibold">milipat@admin.com</p>
        </DropdownItem>
        <DropdownItem key="settings">나의 프로필</DropdownItem>
        <DropdownItem key="configurations">설정</DropdownItem>
        <DropdownItem key="help_and_feedback">도움말</DropdownItem>
        <DropdownItem key="logout" color="danger">
          로그아웃
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
