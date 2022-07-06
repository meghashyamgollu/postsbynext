
import styles from "../styles/Home.module.css";
import GridItem from "./GridItem";
import { PostData } from "../pages/view";
import { FC } from "react";

interface ViewProps{
  postsData: PostData[];
  handleDelete: (id: number) => void;
}

const GridView: FC <ViewProps> = ({ postsData, handleDelete }) => {

  return (
    <div className="grid-view">
      <div className={styles.grid_cont_main}>
        {postsData.map((item: PostData) => (
          <GridItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default GridView;
