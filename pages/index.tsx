import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import styles from "../styles/Home.module.css";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts Viewer</title>
      </Head>
      <h1 className={styles.title}>Posts Viewer</h1>
      <div className={styles.cont1}>
        <div className={styles.subcont}>
          <Link href="/view?type=list">
            <h3 style={{backgroundColor: "aqua", padding: "10px", borderRadius: "10px", cursor: "pointer"}}>List View</h3>
          </Link>
        </div>
        <div className={styles.subcont}>
          <Link href="/view?type=grid">
            <h3 style={{backgroundColor: "aqua", padding: "10px", borderRadius: "10px", cursor: "pointer"}}>Grid view</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
