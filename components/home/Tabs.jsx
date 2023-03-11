import { useState } from "react";
import { Tabs } from "antd";

import { data1, data2, data3 } from "@/utils/datas";
import Card from "./Card";

import styles from "./Home.module.css";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: `Hot Dishes`,
    children: <Card data1={data1} data2={data2} data3={data3} />,
  },
  {
    key: "2",
    label: `Cold Dishes`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Soup`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: "4",
    label: `Grill`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: "5",
    label: `Appetizer`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: "6",
    label: `Dessert`,
    children: `Content of Tab Pane 3`,
  },
];

const borderClass = ["redBorder", "greenBorder", "blueGreyBorder"];

const MyTabs = () => {
  const [tabIndex, setTabIndex] = useState("0");

  return (
    <div className={styles.body}>
      <Tabs
        className={`tabs ${borderClass[tabIndex]}`}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default MyTabs;
