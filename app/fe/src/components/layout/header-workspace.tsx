import { IconLogo, IconLogoSquare } from "../common/icons";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Divider,
} from "@nextui-org/react";

type HeaderProps = {
  title?: string;
};

export default function HeaderWorkspace(props: HeaderProps) {
  return (
    <div className="z-50 flex h-[70px] w-full flex-row items-center justify-between bg-primary px-4">
      <div className="flex h-fit flex-row items-end justify-end gap-4">
        <IconLogo width={100} fill="#ffffff"></IconLogo>
        <p className="font-bold text-white">워크스페이스</p>
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
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
