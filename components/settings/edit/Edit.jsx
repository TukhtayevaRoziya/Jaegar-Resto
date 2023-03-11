import React from "react";
import styles from "./Edit.module.css"

let foooding = [];
function Edit({ editOpen, setEditOpen, menuItems, element, setMenuItems }) {
  foooding = menuItems;

  let cancelHander = () => {
    setEditOpen(!editOpen);
  };

  let formHander = (e) => {
    e.preventDefault();
    foooding.map((item) => {
      if (item.id === element.id) {
          item.title = e.target[0].value;
          item.img = e.target[1].value;
          item.theRest = e.target[2].value;
          item.foodType = e.target[3].value;
          item.money = e.target[4].value;
      }
    });
    setEditOpen(!editOpen);
    e.target.reset();
  };
  setMenuItems(foooding)

  return (    
    <div className={`${styles.edits} ${editOpen ? styles.edits__open : ""}`}>
      <div className={`${styles.edits__main} ${editOpen ? styles.edits__mopen : ""}`}>
        <h1 className={styles.edits__title}>Edit Product</h1>
        <form onSubmit={formHander} className={styles.edits__form} action="">
          <label className={styles.edits__label} htmlFor="">
            <span className={styles.edits__name}>Name</span>
            <input
              className={styles.edits__input}
              type="text"
              defaultValue={element.title}
              placeholder="Name"
            />
          </label>
          <label className={styles.edits__label} htmlFor="">
            <span className={styles.edits__name}>Images</span>
            <input
              className={styles.edits__input}
              type="text"
              defaultValue={element.img}
              placeholder="Images"
            />
          </label>
          <label className={styles.edits__label} htmlFor="">
            <span className={styles.edits__name}>Bowls</span>
            <input
              className={styles.edits__input}
              type="text"
              defaultValue={element.theRest}
              placeholder="Bowls"
            />
          </label>
          <label className={styles.edits__label} htmlFor="">
            <span className={styles.edits__name}>Type</span>
            <input
              className={styles.edits__input}
              type="text"
              defaultValue={element.foodType}
              placeholder="Type"
            />
          </label>
          <label className={styles.edits__label} htmlFor="">
            <span className={styles.edits__name}>Price</span>
            <input
              className={styles.edits__input}
              type="text"
              defaultValue={element.money}
              placeholder="Price"
            />
          </label>
          <div className={`${styles.d_flex} ${styles.justify_content_between}`}>
            <button
              type="button"
              onClick={cancelHander}
              className={styles.edits__cancelbtn + ' ' +  styles.col_5}
            >
              Cancel
            </button>
            <button type="submit" className={styles.edits__btn + ' ' +  styles.col_5}>
              Confirm Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;