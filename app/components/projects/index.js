import Link from "next/link";
import BlockImage from "../image";
import style from './style.module.scss'; 
import utils from "../../assets/scss/utils.module.scss";

export default function BlockProjects(project) {

  return (
    <>
      <Link className={style.project} href={"/work/" + project.slug}>
      <article id={project.id}>
      <header>
      <h3 className={style.title + " text-small"}>{project.short_title}</h3>
      <ul className={style.meta + " text-xsmall"}>
      <li><span className={utils.screen_reader_text}>Type of project:</span> {project.category}</li>
      </ul>
      </header>
      <BlockImage className={style.image} url={project.thumbnail} alt={project.title} priority={project.priority} sizes={project.sizes} />
      </article>
      </Link>  
      </>
      )
    }