
import ListItem from "./ListItem";
import styles from "../styles/ListItem.module.css";
import { PostData } from "../pages/view";
import { FC } from "react";

interface ViewProps{
  postsData: PostData[];
  handleDelete: (id: number) => void;
}

const ListView: FC <ViewProps> = ({ postsData, handleDelete }) => {

  // console.log(postsData);
  return (
    <div className={styles.lists_main_div}>
      <div>
        {postsData.map((item: PostData) => <ListItem key={item.id} item={item} handleDelete={handleDelete} />)}
      </div>
    </div>
  );
};


export default ListView;
