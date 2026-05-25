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
    <h3 className={style.title}>{project.title}</h3>
    <ul className={style.meta}>
    <li><span className={utils.screen_reader_text}>Type of project:</span> {project.category}</li>
     <li><span className={utils.screen_reader_text}>Year:</span> {project.year}</li>
    </ul>
    </header>
    <BlockImage className={style.image} url={project.thumbnail} alt={project.title} priority={project.priority} sizes={project.sizes} />
    </article>
    </Link>  
    </>
  )
}