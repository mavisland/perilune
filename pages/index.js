import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const icons = props.icons;
  return (
    <div className={styles.container}>
      <Head>
        <title>Perilune</title>
        <meta name="description" content="Simply beautiful open source icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Perilune</span> Icons
        </h1>
        <p className={styles.description}>
          100+ Simply beautiful open source icons
        </p>
        <div className={styles.icons}>
          {icons.map((icon) => (
            <div
              key={icon.key}
              className={styles["icon-item"]}
              title={icon.name}
              data-tags="{icon.tags}"
            >
              <i
                className={`${styles["icon-pl"]} pl pl-${icon.key}`}
                aria-hidden="true"
              ></i>
              <code className={styles["icon-item-code"]}>pl-{icon.key}</code>
              <small className={styles["icon-item-label"]}>{icon.name}</small>
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
