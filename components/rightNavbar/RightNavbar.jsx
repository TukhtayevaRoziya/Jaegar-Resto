import { useState } from 'react'
import Image from 'next/image'
import {AiOutlineDelete} from 'react-icons/ai'
import i1 from '../../assets/card_i2.png'
import  styles from './RightNavbar.module.css'

const RightNavbar = () => {
  const [data, setData] = useState([

  ])
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
        <div className={styles.box}>
          
        <div className={styles.block}>
          <div className={styles.main_info}>
            <Image alt='' src={i1}/>
            <div>
              <h1>Spicy seasoned sea...</h1>
              <p>$ 2.29 </p>
              </div>
          </div>
            <input className={styles.count} />
            <span>$ 4,58</span>
        </div>
        <div className={styles.extra}>
          <input placeholder='Order Note...' />
          <div className={styles.delete}>
            <AiOutlineDelete />
          </div>
        </div>
        </div>
        <div className={styles.box}>
          
        <div className={styles.block}>
          <div className={styles.main_info}>
            <Image alt='' src={i1}/>
            <div>
              <h1>Spicy seasoned sea...</h1>
              <p>$ 2.29 </p>
              </div>
          </div>
            <input className={styles.count} />
            <span>$ 4,58</span>
        </div>
        <div className={styles.extra}>
          <input placeholder='Order Note...' />
          <div className={styles.delete}>
            <AiOutlineDelete />
          </div>
        </div>
        </div>
        <div className={styles.box}>
          
        <div className={styles.block}>
          <div className={styles.main_info}>
            <Image alt='' src={i1}/>
            <div>
              <h1>Spicy seasoned sea...</h1>
              <p>$ 2.29 </p>
              </div>
          </div>
            <input className={styles.count} />
            <span>$ 4,58</span>
        </div>
        <div className={styles.extra}>
          <input placeholder='Order Note...' />
          <div className={styles.delete}>
            <AiOutlineDelete />
          </div>
        </div>
        </div>
        <div className={styles.payment}>
          <div>
            <h1>Discount</h1>
            <h2>$0</h2>
          </div>
          <div>
            <h1>Sub total</h1>
            <h2> $ 21,03</h2>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RightNavbar
