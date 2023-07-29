import Button from "../Button";
import ChevronDownSolid from "../../assets/icons/chevron-down-solid.svg";
import ChevronDownWhite from "../../assets/icons/chevron-down-white.svg";
import Clip from "../../assets/icons/clip.svg";
import ContactBuss from "../../assets/icons/contact-buss.svg";
import ContactCheck from "../../assets/icons/contact-check.svg";
import ContactClose from "../../assets/icons/contact-close.svg";
import Message from "../../assets/icons/message.svg";
import React, { useState } from "react";
import { Dropdown } from "antd";

export default function Header() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const filters = [
    {
      label: "Applied",
      count: 1745,
    },
    {
      label: "Shortlisted",
      count: 453,
    },
    {
      label: "Technical Interview",
      count: 123,
    },
    {
      label: "Opportunity Browsing",
      count: 243,
    },
    {
      label: "Video Interview I",
      count: 25,
    },
    {
      label: "Video Interview II",
      count: 25,
    },
    {
      label: "Video Interview III",
      count: 25,
    },
    {
      label: "Offer",
      count: 25,
    },
    {
      label: "Withdrawn",
      count: 25,
    },
  ];

  return (
    <header className="w-full py-[24px] px-[32px] grid grid-flow-col grid-cols-[30%_auto] gap-[32px]">
      <div>
        <h1 className="text-[20px] font-[600] text-primary">
          London Internship Program
        </h1>
        <span className="block mt-[8px] text-[12px] font-[300]">London</span>
      </div>

      <div className=" w-full  grid grid-flow-col gap-2  items-center grid-cols-[auto_max-content]">
        <Dropdown
          className="py-[8px] block px-[16px] bg-white text-primary w-full max-w-[321px] cursor-pointer text-[16px] rounded-[16px]"
          overlayClassName="header-program-filter-dropdown"
          openClassName="rounded-b-none shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)]"
          menu={{
            items: filters.map((filter, index) => {
              return {
                key: filter.label,
                label: (
                  <div
                    className={`
                      px-[16px] py-[23.5px] flex justify-between items-center 
                      ${
                        categoryFilter === filter.label
                          ? "bg-[#EDF2FF] shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)] text-primary"
                          : ""
                      } 
                      ${
                        index === filters.length - 1
                          ? ""
                          : "border-b-[1px] border-[#EEE]"
                      }
                    `}
                  >
                    <span className="text-[16px]">{filter.label}</span>
                    <span
                      className={`bg-[#F8F8F8] py-[2px] px-[10px] rounded-3xl ${
                        categoryFilter === filter.label ? "bg-[#D1DDFF]" : ""
                      }`}
                    >
                      {filter.count}
                    </span>
                  </div>
                ),
                className: "!p-0",
                onClick: (ev) => {
                  setCategoryFilter(ev.key);
                },
              };
            }),
            onSelect: (ev) => {
              alert("dude");
              setCategoryFilter(ev.selectedKeys[0]);
            },
          }}
          trigger={["click"]}
        >
          <button className="flex justify-between items-center text-[16px]">
            {categoryFilter || (
              <span className="text-[#dadada]">Select a category</span>
            )}

            <ChevronDownSolid />
          </button>
        </Dropdown>

        <div className=" grid grid-flow-col gap-[8px] justify-between items-center">
          <Button>
            <Clip />
          </Button>
          <Button>
            <ContactClose />
          </Button>
          <Button>
            <ContactCheck />
          </Button>
          <Button>
            <ContactBuss />
          </Button>
          <Button>
            <Message />
          </Button>

          <Dropdown
            trigger={["click"]}
            className="bg-primary "
            menu={{
              items: [
                {
                  label: "Item 1",
                  key: "1",
                },
                {
                  label: "Item 2",
                  key: "2",
                },
                {
                  label: "Item 3",
                  key: "3",
                },
                {
                  label: "Item 4",
                  key: "4",
                },
              ],
            }}
          >
            <Button className="flex items-center p-0 h-full text-white">
              <div className="px-[16px] text-[13px]">
                Move To Video Interview I
              </div>
              <div className="flex items-center justify-center border-l-[1px] p-[10px] h-full">
                <ChevronDownWhite />
              </div>
            </Button>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
