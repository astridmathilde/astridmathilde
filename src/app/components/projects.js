import { client } from "../../sanity/client";
import Link from "next/link";
import BlockProjectImage from "./project-image";
import style from "../../assets/scss/components/projects.module.scss";
import utils from "../../assets/scss/utils.module.scss";

export default function BlockProjects(project) {
  return (
    <>
      <Link className={style.project} href={"/work/" + project.slug.current}>
        <article id={project._id}>
          <header>
            <h3 className={style.title + " text-small"}>{project.title}</h3>
            <ul className={style.meta + " text-xsmall"}>
              <li><span className={utils.screen_reader_text}>Type of project:</span> {project.category}</li>
            </ul>
          </header>
          <BlockProjectImage image={project.thumbnail} width={3994} height={2993} priority="true" alt={project.thumbnail.alt}/>
        </article>
      </Link>
    </>
  )
}