import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { DELETE_ORDER, GET_ORDER } from "../redux/actions/types";
import { getAction } from "../redux/actions/readAction";
import { deleteAction } from "../redux/actions/deleteAction";

import styles from "./RightNavbar.module.css";
import MyDrawer from "./MyDrawer";

const RightNavbar = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { data } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getAction("/", GET_ORDER));
  }, [dispatch]);

  if (!data) {
    return <>No Order...</>;
  }

  var dataMap = data.map((d) => {
    let totalPrice = Number(d.price) * d.count;
    totalPrice = Math.round(100 * totalPrice) / 100;
    let count = d.count;

    const onClick = () => {
      dispatch(deleteAction("/", DELETE_ORDER, d.id));
      dispatch(getAction("/", GET_ORDER));
    };

    return (
      <div className={styles.box} key={d.id}>
        <div className={styles.block}>
          <div className={styles.main_info}>
            <Image alt="" src={d.image} />
            <div>
              <h1>{d.name}</h1>
              <p>$ {d.price} </p>
            </div>
          </div>
          <input
            className={styles.count}
            value={count}
            onChange={(e) => (count = e.target.value)}
          />
          <span>$ {totalPrice}</span>
        </div>
        <div className={styles.extra}>
          <input placeholder="Order Note..." />
          <div className={styles.delete} onClick={onClick}>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Orders #34562</h1>
      <div>
        <button>Dine In</button>
        <button>To Go</button>
        <button>Delivery</button>
      </div>
      <div className={styles.table_head}>
        <h1>Item</h1>
        <h2>Qty</h2>
        <h3>Price</h3>
      </div>
      <main className={styles.main}>
        {dataMap}
        <div className={styles.payment}>
          <div>
            <h1>Discount</h1>
            <h2>$0</h2>
          </div>
          <div>
            <h1>Sub total</h1>
            <h2> $ {totalPrice}</h2>
          </div>
          <button onClick={() => setOpen(true)}>Continue to Payment</button>
          <MyDrawer open={open} setOpen={setOpen} data={data} />
        </div>
      </main>
    </div>
  );
};

export default RightNavbar;
