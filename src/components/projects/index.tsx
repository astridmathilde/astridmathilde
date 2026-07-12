import Link from "next/link";
import BlockProjectImage from "../project-image";
import style from './style.module.scss';
import utils from "../../assets/scss/utils.module.scss";

export default function BlockProjects(project) {
  return (
    <>
    <Link className={style.project} href={"/work/" + project.slug.current}>
    <article id={project._id}>
    <header>
    <h3 className={utils.screen_reader_text}>{project.title}</h3>
    <ul className={style.meta}>
    <li className={style.type}><span className={utils.screen_reader_text}>Category:</span>{project.category}</li>
    <li className={style.type}>{project.client ? project.client : project.type}</li>
    </ul>
    <p className={style.year}><span className={utils.screen_reader_text}>Year:</span>{project.year}</p>
    </header>
    <BlockProjectImage image={project.thumbnail} width={3994} height={2993} priority="true" alt={project.thumbnail.alt}/>
    </article>
    </Link>
    </>
  )
}