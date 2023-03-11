import React, { useEffect, useState } from "react";
import { Select } from "antd";
import Image from "next/image";

import styles from "./Home.module.css";

const Card = ({data1, data2, data3}) => {
  const [data, setData] = useState(data1);

  if (!data1 || !data2 || !data3) {
    return <>Loading...</>;
  }

  const dataMap = data.map((d) => (
    <div key={d.id} className={styles.card_box}>
      <Image src={d.image} alt="" />
      <h1>{d.name}</h1>
      <h2>${d.price}</h2>
      <h3>{d.available} available</h3>
    </div>
  ));
  const handleChange = (value) => {
    const convertNum = Number(value);
    if (convertNum === 1) {
      setData(data2);
    } else if (convertNum === 2) {
      setData(data3);
    } else {
      setData(data1);
    }
  };
  return (
    <div>
      <div className={styles.card_header}>
        <h1>Choose Dishes</h1>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "0", label: "Dine In" },
            { value: "1", label: "To Go" },
            { value: "2", label: "Delivery" },
          ]}
        />
      </div>
      <div className={styles.card_block}>{dataMap}</div>
    </div>
  );
};

export default Card;
