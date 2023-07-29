import ChevronDown from "../../assets/icons/chevron-down.svg";
import FileMini from "../../assets/icons/file-little.svg";
import Info from "../../assets/icons/infoicon.svg";
import React from "react";
import Search from "../../assets/icons/search.svg";
import { Collapse, Input } from "antd";

export default function Filters() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const filters = [
    {
      label: "Personal Information",
      dropdown: true,
    },
    {
      label: "Education",
      dropdown: true,
    },
    {
      label: "Work Experience",
      dropdown: true,
    },
    {
      label: "Activity Filter",
      dropdown: true,
    },
    {
      label: "Advanced Filter",
      dropdown: false,
    },
  ];

  return (
    <div>
      <Input
        placeholder="Serach by name, edu, exp or #tag"
        className="!py-[13px] !px-[16px] rounded-[8px] border-[#F3F3F3] mb-[24px]"
        prefix={<Search />}
        suffix={<Info />}
      />

      <div className="bg-white rounded-[8px]">
        <div className="grid grid-flow-col gap-3 justify-between items-center py-[18px] px-[16px] border-[#F2F2F2] border-b-[1px]">
          <span className="font-bold">Filters</span>
          <span className="text-[12px]">0 Selected</span>
        </div>

        <Collapse
          items={filters.map((filter, index) => {
            return {
              key: index,
              label: filter.label,
              children: (
                <p className="text-[#d5d5d5]">Filter options comes here</p>
              ),
              extra: <ChevronDown />,
              className: "!border-[#F2F2F2] rounded-0",
              onClick: () => {
                // alert("onclick")
              },
            };
          })}
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIcon={() => <FileMini />}
          className="!bg-white !border-[0px]"
        />
      </div>
    </div>
  );
}
