import Link from "next/link";
import BlockImage from "../image";
import style from './style.module.scss'; 
import utils from "../../assets/scss/utils.module.scss";

export default function BlockProject(project) {
  return (
    <>
    <Link className={style.project} href={"/work/" + project.slug}>
    <article id={project.id}>
    <header>
    <h3 className={utils.screen_reader_text}>{project.short_title}</h3>
    <ul className={style.meta}>
    <li className={style.type}>{project.client ? project.client : project.type}</li>
    <li className={style.type}><span className={utils.screen_reader_text}>Category:</span> {project.category}</li>
    </ul>
    <p className={style.year}><span className={utils.screen_reader_text}>Year:</span> {project.year}</p>
    </header>
    <BlockImage className={style.image} url={project.thumbnail} alt={project.title} priority={project.priority} sizes={project.sizes} />
    </article>
    </Link>  
    </>
  )
}