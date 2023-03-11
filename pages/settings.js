import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faBell,
  faBuilding,
  faDashboard,
  faLock,
  faPlus,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";

import { data1 } from "@/utils/datas";
import Image from "next/image";
import AddModal from '../components/settings/addModal/AddModal';
import Edit from './../components/settings/edit/Edit';

import styles from '../styles/Settings.module.css'
import Sidebar from "@/components/sidebar/Sidebar";

function Settings() {
  const [save, setsave] = useState([]);

  let [menuItems, setMenuItems] = useState(data1);


  const filterItems = (foodType) => {
    if (foodType === "All") {
      setMenuItems(obj);
      return;
    }
    const newitems = obj.filter((item) => {
      return item.foodType === foodType;
    });
    setMenuItems(newitems);
  };
  let FilterBtn = ["All", ...new Set(data1.map((item) => item.foodType))];
  let [type, setCategory] = useState(FilterBtn);

  const filterItem = (type) => {
    if (type === "All") {
      setMenuItems(data1);
      return;
    }

    const newItems = data1.filter((item) => {
      return item.foodType === type;
    });

    setMenuItems(newItems);
  };

  let [modal, setModal] = useState(false)


  let [element, setElement] = useState([])
  let [editOpen, setEditOpen] = useState(false)
  
  let editHander = (id) => {
    setElement(id)
    setEditOpen(!editOpen)
  }

  return (
    <Sidebar>

    <div className={styles.setting}>
      <div>
        <h2 className={styles.setting__title}>Settings</h2>
        <div className={`${styles.setting_menu} ${styles.setting}`}>
          <ul className={styles.setting__list}>
            <li className={styles.setting__item}>
              <i className={`${styles.bx} ${styles.setting__icon} ${styles.bx_heart}`}></i>
              <div className={styles.setting__title_div}>
                <h4>Appereance</h4>
                <p>Dark and Light mode, Font size</p>
              </div>
            </li>

            <li className={styles.setting__item}>
              <FontAwesomeIcon className={styles.setting__icon} icon={faBuilding} />
              <div className={styles.setting__title_div}>
                <h4>Your Restaurant</h4>
                <p>Dark and Light mode, Font size</p>
              </div>
            </li>

            <li className={styles.setting__item}>
              <FontAwesomeIcon className={styles.setting__icon} icon={faDashboard} />
              <div className={styles.setting__title_div}>
                <h4>Products Management</h4>
                <p>Manage your product, pricing, etc</p>
              </div>
            </li>

            <li className={styles.setting__item}>
              <FontAwesomeIcon className={styles.setting__icon} icon={faBell} />
              <div className={styles.setting__title_div}>
                <h4>Notifications</h4>
                <p>Customize your notifications</p>
              </div>
            </li>

            <li className={styles.setting__item}>
              <FontAwesomeIcon className={styles.setting__icon} icon={faLock} />
              <div className={styles.setting__title_div}>
                <h4>Security</h4>
                <p>Configure Password, PIN, etc</p>
              </div>
            </li>

            <li className={styles.setting__item}>
              <FontAwesomeIcon className={styles.setting__icon} icon={faWarning} />
              <div className={styles.setting__title_div}>
                <h4>About Us</h4>
                <p>Find out more about Posly</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
        <div>
        <div className={`${styles.product} ${styles.p_4} ${styles.text_white}`}>
      <div className={`${styles.product__management} ${styles.d_flex} ${styles.align_items_center} ${styles.justify_content_between} ${styles.mb_4}`}>
        <h3>Products Management</h3>
        <button className={styles.product__btn}>
          <FontAwesomeIcon className={styles.me_3} icon={faBarsProgress}/>
          Manage Categories
        </button>

      </div>

      <ul className={`${styles.d_flex} ${styles.middle_part__list}`}>
        {type.map((item, i) =>{
          return (
            <li key={i} className={styles.food_items}>
              <button onClick={() => filterItem(item)} className={styles.food_links}>{item}</button>
            </li>
          )
        })}
      </ul>

      <ul className={`${styles.d_flex} ${styles.product__list__wrap} ${styles.flex_wrap}`}>
        <li className={styles.product__item__food}>
        <button onClick={() =>  setModal(!modal)} className={styles.product__add__btn}>
            <FontAwesomeIcon className={styles.product__icon} icon={faPlus}/> <br/>
            Add new dish
          </button>
        </li>

        {menuItems.map(item =>{
          return (
            <li className={`${styles.food_prices} ${styles.product__item__food}`} key={item.id}>
              <div className={`${styles.d_flex} ${styles.flex_column} ${styles.justify_content_center} ${styles.align_items_center } ${styles.pt_3}`}>
                <Image className={`${styles.food_images} ${styles.product__imgs}`} src={item.img} alt="spicy-food" width={135} height={135} />
                <p className={styles.type_of_food}>{item.title}</p>
                <div className={`${styles.d_flex} ${styles.justify_content_center}`}>
                  <p className={`${styles.price} ${styles.product__infos} ${styles.me_2}`}>$ {item.money} </p>
                  <p className={`${styles.amount_of_food} ${styles.product__infos}`}>{item.theRest} Bowls</p>
                </div>
                <div className={`${styles.edit_part} ${styles.d_flex} ${styles.justify_content_center} ${styles.align_items_center}`}>
                  <i className={`${styles.bx} ${styles.edit_text} ${styles.fs_5} ${styles.me_2} ${styles.bx_edit_alt}`}></i>
                  <p
                  onClick={() => editHander(item)}
                  className={`${styles.pt_3} ${styles.edit_text}`}>Edit dish</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <div className={`${styles.d_flex} ${styles.product__btn__wrap}`}>
        <button className={`${styles.bg_transparent} ${styles.products__button} ${styles.payment_type_btn} ${styles.me_3}`}>
          Discard Changes
        </button>
        <button className={`${styles.bg_transparent} ${styles.products__button} ${styles.payment_type_btn}`}>Save Changes</button>
      </div>
       
    </div>
        </div>
        <AddModal
        modal={modal}
        setModal={setModal}
        menuItems={menuItems}
        setMenuItems={setMenuItems}
      />
      <Edit
      element={element}
      editOpen={editOpen}
      menuItems={menuItems}
      setEditOpen={setEditOpen}
      setMenuItems={setMenuItems}
      />
    </div>
    </Sidebar>
  );
}

export default Settings;
