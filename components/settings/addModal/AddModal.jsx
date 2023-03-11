import React, { useState } from 'react'
import styles from "./AddModal.module.css"
import { v4 as uuidv4 } from "uuid";

function AddModal(props) {
  
  let [foodName, setFoodName] = useState('')
  let [foodPrice, setFoodPrice] = useState('')
  let [foodBowl, setBowl] = useState('')


  const foodNameHandler = (e) =>{
    setFoodName(e.target.value)
  }

  const foodPriceHandler = (e) =>{
    setFoodPrice(e.target.value)
  }  

  const foodBowlHandler = (e) =>{
    setBowl(e.target.value)
  }  
  
  const addFoodHandler = () =>{
    props.setModal(!props.modal)
    props.setMenuItems([
      {
        img: 'https://www.expatica.com/app/uploads/sites/5/2014/05/french-food-1920x1080.jpg',
        title: foodName,
        money: foodPrice,
        theRest: foodBowl,
        id:uuidv4(), 
      },
      ...props.menuItems,
    ])
    setFoodName('')
    setFoodPrice('')
    setBowl("")
  }

  return (
    <div>
<div className={`${styles.backdrop_add} ${props.modal ? styles.d_block : styles.d_none}`}>
        <div className={`${styles.add_modal} ${styles.p_4} ${props.modal ? styles.d_block : styles.d_none}`}> 
           <h3 className={`${styles.mb_4} ${styles.text_white}`}>Add Food</h3>
           <form className={`${styles.d_flex} ${styles.flex_column}`}>

             <label className={`${styles.mb_2} ${styles.text_white}`}>Food Name</label>
             <input onChange={foodNameHandler} className={styles.mb_4} type="text" placeholder='Food Name' />

             <label className={`${styles.mb_2} ${styles.text_white}`}>Price</label>
             <input onChange={foodPriceHandler} className={styles.mb_4} type="number" placeholder='$' />

             <label className={`${styles.mb_2} ${styles.text_white}`}>Bowl Count</label>
             <input 
             onChange={foodBowlHandler}
             type="number" placeholder='0' />
          </form>

            <div className={`${styles.d_flex} ${styles.justify_content_center}`}>
              <div className={styles.add_modal_btns}>
                <button onClick={() => props.setModal(!props.modal)} className={styles.me_3}>Cancel</button>
                <button onClick={addFoodHandler}>Add</button>
              </div>
            </div>

        </div>
     </div>
    </div>
  )
}

export default AddModal
