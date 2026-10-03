import { connection } from "next/server";
import { getBlikkjournal } from "../../lib/notion";
import Image from "next/image";
import utils from "../../assets/scss/utils.module.scss";
import styles from "./style.module.scss";

export default async function Blikkjournal({ mode = "latest" }) {
  if (mode === "random") await connection();

  const count = mode === "random" ? 7 : 1;
  const [{ results: blikkjournal }] = await Promise.all([
    getBlikkjournal(count)
  ]);

  if (!blikkjournal.length) return null;

  const entry = mode === "random"
    ? blikkjournal[Math.floor(Math.random() * blikkjournal.length)]
    : blikkjournal[0];

  const entryId = entry.id;
  const imgUrl = `/api/images/${entryId}`;
  const title = (entry.properties.Title as any)?.title?.[0]?.plain_text;
  const location = (entry.properties.Place as any)?.select?.name;
  const city = (entry.properties.City as any)?.select?.name;
  const country = (entry.properties.Country as any)?.select?.name;

  return (
    <a key={entry.id} className={"lower-opacity " + styles.blikkjournal} href="https://blikk.directory" rel="external" target="_blank" title="See my blikkjournal!">
      <figure key={entry.id}>
        <Image src={imgUrl} alt="Image from my blikkjournal" style={{maxWidth: "100%", height: "auto"}} width="600" height="600" />
        <figcaption>
          <p><span className={utils.screen_reader_text}>Location:</span> {title ? title : location + ", "  + city + ", " + country}</p>
          <p><span className={styles.link}>From Blikkjournal</span> <span aria-hidden="true">{"->"}</span></p>
        </figcaption>
      </figure>
    </a>
  )
}