import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import ListView from "../components/ListView";
import GridView from "../components/GridView";
import { useState, FC } from "react";

export interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsData {
  postsData: PostData[];
}

const View: FC<PostsData> = ({ postsData }) => {
  const router = useRouter();
  const { type } = router.query;
  const [posts, setPosts] = useState<PostData[]>([...postsData]);

  const handleDelete = (id: PostData["id"]) => {
    let newPosts: PostData[] = posts.filter((post) => post.id !== id);
    setPosts([...newPosts]);
    console.log("delete", id, newPosts);
  };

  return (
    <div className={styles.view_div}>
      <Head>
        <title>Posts {type === "list" ? "List" : "Grid"} View</title>
      </Head>
      <h1 className={styles.title}>{type === "list" ? "List" : "Grid"} View</h1>
      <div className={styles.nav_buttons}>
        <button
          className={styles.home_button}
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </button>
        <button
          className={styles.switch_button}
          onClick={() => {
            {
              type === "list"
                ? router.push("/view?type=grid")
                : router.push("/view?type=list");
            }
          }}
        >
          Switch to {type === "list" ? "Grid" : "List"}
        </button>
      </div>

      {type === "list" ? (
        <ListView handleDelete={handleDelete} postsData={posts} />
      ) : (
        <GridView handleDelete={handleDelete} postsData={posts} />
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  console.log("fecthed");
  return {
    props: {
      postsData: response.data.slice(0, 20),
    },
  };
};

export default View;
