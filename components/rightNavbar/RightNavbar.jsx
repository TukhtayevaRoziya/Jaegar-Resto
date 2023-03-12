import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Select } from "antd";

import i1 from "../../assets/card_i2.png";
import { DELETE_ORDER, GET_ORDER } from "../redux/actions/types";
import { getAction } from "../redux/actions/readAction";
import { deleteAction } from "../redux/actions/deleteAction";

import styles from "./RightNavbar.module.css";

const RightNavbar = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { data } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
  if (data.length != 0) {
    let total = data.reduce((t, item) => {t + item.count * item.price},0);
    // setTotalPrice(total)
    // arr.reduce(function (acc, obj) { return acc + obj.x; })
    console.log(total);
  }
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
          <button onClick={showDrawer}>Continue to Payment</button>
          <Drawer
            title=""
            placement="right"
            onClose={onClose}
            open={open}
            className={styles.drawer}
          >
            <h1>Payment</h1>
            <p>{data.length} payment method available</p>
            <h2>Payment Method</h2>
            <div className={styles.carts}>
              <div className={styles.carts__box}>
                <IoWalletOutline />
                <h1>Credit Card</h1>
              </div>
              <div className={styles.carts__box}>
                <IoWalletOutline />
                <h1>Paypal</h1>
              </div>
              <div className={styles.carts__box}>
                <IoWalletOutline />
                <h1>Cash</h1>
              </div>
            </div>
            <div className={styles.inp}>
              <div>
                <h1>Cardholder Name</h1>
                <input placeholder="Levi Ackerman" />
              </div>
              <div>
                <h1>Card Number</h1>
                <input placeholder="2564 1421 0897 1244" type={"number"} />
              </div>
              <div className={styles.two_inp}>
                <div>
                  <h1>Expiration Date</h1>
                  <input type={"date"} />
                </div>
                <div>
                  <h1>CVV</h1>
                  <input type={"date"} />
                </div>
              </div>
            </div>
            <div
              styles={{ borderBottom: "none !important" }}
              className={styles.inp}
            >
              <h1>Table no.</h1>
              <input placeholder="140" type={"number"} />
            </div>
            <div className={styles.btn}>
              <button onClick={onClose}>Cancel</button>
              <button onClick={onClose}>Confirm Payment</button>
            </div>
          </Drawer>
        </div>
      </main>
    </div>
  );
};

export default RightNavbar;
