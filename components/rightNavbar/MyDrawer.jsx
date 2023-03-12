import { Drawer } from 'antd'
import { IoWalletOutline } from 'react-icons/io5'
import styles from "./RightNavbar.module.css";


const Inp = ({ title, placeholder, type = "text", className }) => (
  <div className={className}>
    <h1>{title}</h1>
    <input placeholder={placeholder} type={type} />
  </div>
);

const MyDrawer = ({open, setOpen, data }) => {
  return (
    <Drawer
    title=""
    placement="right"
    onClose={()=>setOpen(false)}
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
      <Inp title={"Cardholder Name"} placeholder={"Levi Ackerman"} />
      <Inp
        title={"Card Number"}
        placeholder={"2564 1421 0897 1244"}
        type={"number"}
      />
      <div className={styles.two_inp}>
        <Inp title={"Expiration Date"} type={"date"} />
        <Inp title={"CVV"} type={"password"} />
      </div>
    </div>
    <Inp
      title={"Table no."}
      placeholder="140"
      type={"number"}
      className={styles.inp}
    />
    <div className={styles.btn}>
      <button onClick={()=>setOpen(false)}>Cancel</button>
      <button onClick={()=>setOpen(false)}>Confirm Payment</button>
    </div>
  </Drawer>
  )
}

export default MyDrawer
