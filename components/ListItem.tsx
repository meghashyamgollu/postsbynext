import Image from "next/image";
import styles from "../styles/ListItem.module.css";
import { useState, FC } from "react";
import { PostData } from "../pages/view";

interface EleProps {
  item: PostData;
  handleDelete: (id: number) => void;
}

const ListItem: FC<EleProps> = ({ item, handleDelete }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className={styles.list_item}>
      <div className={styles.list_item__main}>
        <div className={styles.list_item__image}>
          <Image
            className={styles.image_next}
            src={`https://picsum.photos/200/200?grayscale&random=${item.id}`}
            layout="fill"
            alt={item.title}
          />
        </div>
        <div className={styles.list_item__title}>{item.title}</div>
        <div className={styles.list_buttons_div}>
          <button
            className={styles.list_buttons}
            style={{ backgroundColor: "red" }}
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
          <button
            className={styles.list_buttons}
            onClick={() => setExpanded(!expanded)}
            style={{
              fontWeight: "900",
              fontSize: "22px",
              backgroundColor: "transparent",
              color: "white",
            }}
          >
            ⓘ
          </button>
        </div>
      </div>
      {expanded ? (
        <div className={styles.list_item__description}>
          <p>{item.body}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ListItem;
