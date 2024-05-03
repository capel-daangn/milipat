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
import { IconLogo, IconLogoSquare } from "../common/icons";
import { useRouter } from "next/navigation";
import SearchBar from "../search-bar";
import { Key, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

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

  const [indexOfTabs, setIndexOfTabs] = useState<string>("search");
  const [indexOfViews, setIndexOfViews] = useState<string>("analysis");

  const queryClient = useQueryClient();
  const queryIndexOfTabs = useQuery({
    queryKey: ["indexOfTabs"],
    queryFn: () => indexOfTabs,
  });

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
        gap: mobile ? "10px" : "20px",
      }}
    >
      {props.isSearchBarVisible &&
        (mobile ? (
          <>
            <button
              onClick={() => {
                router.push("/home");
              }}
              className="w-fit"
            >
              <IconLogoSquare width={50} fill="#000"></IconLogoSquare>
            </button>

            <div className="w-full"></div>

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
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div className="col-span-1"></div>

            <div className="col-span-3 flex w-full flex-col items-center justify-center">
              <SearchBar value={props.searchedText}></SearchBar>
            </div>

            <div className="col-span-1"></div>

            <Tabs
              className="col-span-3"
              aria-label="Options"
              variant={"underlined"}
              color={"primary"}
              onSelectionChange={(key: any) => {
                setIndexOfTabs(key);
                // console.log(key);
                queryIndexOfTabs.refetch();
              }}
            >
              <Tab key="search" title="탐색 뷰"></Tab>
              <Tab key="analysis" title="분석 뷰"></Tab>
              <Tab key="chatbot" title="챗봇 뷰"></Tab>
            </Tabs>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                router.push("/home");
              }}
              className="w-fit"
            >
              <IconLogo width={100} fill="#000"></IconLogo>
            </button>

            <div className="flex w-full flex-col items-center justify-center">
              <SearchBar value={props.searchedText}></SearchBar>
            </div>

            <div className="w-full flex-col items-center justify-center opacity-0">
              <SearchBar value={props.searchedText} isDisabled></SearchBar>
            </div>

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
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <button className="w-fit">
              <IconLogo width={100} fill="#00000000"></IconLogo>
            </button>

            <Tabs
              aria-label="Options"
              variant={"underlined"}
              color={"primary"}
              onSelectionChange={(key: any) => {
                // setIndexOfTabs(key);
                // // console.log(key);
                // queryIndexOfTabs.refetch();
              }}
            >
              <Tab key="result-search" title="탐색 뷰"></Tab>
              {/* <Tab key="result-analysis" title="분석 뷰"></Tab>
              <Tab key="result-chatbot" title="챗봇 뷰"></Tab> */}
            </Tabs>

            <Tabs
              aria-label="Options"
              variant={"underlined"}
              color={"primary"}
              onSelectionChange={async (key: any) => {
                await setIndexOfViews(key);
                // console.log(key);
                await queryIndexOfViews.refetch();
              }}
            >
              {/* <Tab key="result-search" title="탐색 뷰"></Tab> */}
              <Tab key="analysis" title="분석 뷰"></Tab>
              <Tab key="chatbot" title="챗봇 뷰"></Tab>
            </Tabs>
          </>
        ))}

      {/*  */}
      {props.isSearchBarVisible == false && (
        <>
          <Tabs
            aria-label="Options"
            variant={"underlined"}
            color={"primary"}
            onSelectionChange={async (key: any) => {
              await setIndexOfTabs(key);
              await queryIndexOfTabs.refetch();
            }}
          >
            <Tab key="search" title="탐색 뷰"></Tab>
            <Tab key="analysis" title="분석 뷰"></Tab>
            <Tab key="chatbot" title="챗봇 뷰"></Tab>
          </Tabs>

          <div></div>

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
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </>
      )}
    </div>
  );
}
