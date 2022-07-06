import Image from "next/image";
import { useState, FC } from "react";
import styles from "../styles/GridItem.module.css";
import { PostData } from "../pages/view";

interface EleProps{
  item: PostData;
  handleDelete: (id: number) => void;
}

const GridItem: FC <EleProps> = ({ item, handleDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [options, setOptions] = useState(false);
  return (
    <div
      className={styles.grid_item}
      onMouseOver={() => {
        setOptions(true);
      }}
      onMouseOut={() => {
        setOptions(false);
      }}
    >
      <div className={styles.grid_part}>
        <div className={styles.grid_item__image}>
          <Image
            className={styles.image_next}
            src={`https://picsum.photos/200/200?grayscale&random=${item.id}`}
            layout="fill"
            alt={item.title}
          />
        </div>
        <div className={styles.grid_item__title}>{item.title}</div>
      </div>
      {options ? (
        <div className={styles.onhover_div}>
          <button
            className={styles.grid_hover_buttons_delete}
            onClick={() => handleDelete(item.id)}
            style={{ backgroundColor: "red" }}
          >
            Delete
          </button>
          <button
            className={styles.grid_hover_buttons}
            onClick={() => {
              setModalOpen(true);
              setOptions(false);
            }}
          >
            View
          </button>
        </div>
      ) : null}
      {modalOpen ? (
        <div className={styles.grid_item_modal}>
          <div className={styles.grid_item_modal_inner}>
            <button
              className={styles.grid_hover_buttons_delete}
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Close
            </button>
            <p>{item.body}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GridItem;
