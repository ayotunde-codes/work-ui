import Button from "../Button";
import Calendar from "../../assets/icons/calendar.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import File from "../../assets/icons/file.svg";
import Folder from "../../assets/icons/folder.svg";
import Heart from "../../assets/icons/heart.svg";
import Home from "../../assets/icons/home.svg";
import React from "react";
import Setting from "../../assets/icons/settings.svg";
import Share from "../../assets/icons/share.svg";
import Users from "../../assets/icons/users.svg";
import { Avatar } from "antd";

export default function SideNav() {
  return (
    <aside className="sticky top-0 left-0 h-screen bg-white w-max shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)] py-[24px] px-[12px]">
      <nav className="grid gap-[32px] h-full grid-rows-[max-content_max-content_auto] w-max">
        <Button className="p-0">
          <Avatar size={40} className="">
            L
          </Avatar>
        </Button>

        <div className="grid gap-[24px]">
          <Button className="bg-[#E9EFFF]">
            <Home />
          </Button>

          <Button>
            <Users />
          </Button>

          <Button>
            <Calendar />
          </Button>

          <Button>
            <Share />
          </Button>

          <Button>
            <File />
          </Button>

          <Button>
            <Folder />
          </Button>

          <Button>
            <Heart />
          </Button>

          <Button>
            <ChevronRight />
          </Button>
        </div>

        <div className="grid gap-[24px] self-end  grid-rows-[max-content_max-content]">
          <Button>
            <Setting />
          </Button>

          <Button>
            <Avatar size={24} className="!bg-[#EDF4FF] !text-[#D0E1FF]">
              AS
            </Avatar>
          </Button>
        </div>
      </nav>
    </aside>
  );
}
