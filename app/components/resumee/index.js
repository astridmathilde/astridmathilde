import style from './style.module.scss'; 

export default function BlockResumee(entry) {
  return (
    <>
    <article key={entry.id} className={style.entry + " text-small"}>
    <header className={style.header}>
    <h3 className={style.position}>{entry.position} @ {entry.locationUrl ? <a href={entry.locationUrl} rel="external" target="_blank">{entry.locationName}</a> : entry.locationName}</h3>
    {entry.description ? <p className={style.description} dangerouslySetInnerHTML={{ __html: entry.description }} /> : ""}
    </header>
    <p className={style.time + " text-tiny"}>{entry.time} {entry.type ? <br /> + "(" + entry.type + ")" : ""}</p>
    </article>
    </>
  );
}