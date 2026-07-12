import Link from "next/link";
import { client } from "../../sanity/client";
import { RECENT_PROJECTS } from "../../sanity/lib/queries";
import { categoryLabel, typeLabel } from "../../sanity/lib/option-title";
import BlockDisplay from "../../components/display";
import BlockProjects from "../../components/projects";
import utils from "../../assets/scss/utils.module.scss";
import style from "../../assets/scss/index.module.scss";

export default async function Index() {
  const projects = await client.fetch(RECENT_PROJECTS, {});
  
  return (
    <>
    <h2 className={utils.screen_reader_text}>Introduction</h2>
    <BlockDisplay>Heia! I am a designer and developer from Northern Norway, currently doing a master's in design at the <a href="https://www.aho.no/english/" rel="external" target="_blank">Oslo School of Architecture and Design</a>. With a background in graphic design and web development, I now specialize in designing digital products, and particularly enjoy working with complexity. I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a>, and I have an interest for digital minimalism and <Link href="colophon" title="this site's climate footprint">web sustainability</Link>
    </BlockDisplay>
    
    <h2 className={utils.sectionTitle}>Selected work</h2>
    <div className={style.selectedWork}>
    {projects.map((project) => (
      <BlockProjects key={project._id} id={project._id} title={project.short_title} slug={project.slug} category={categoryLabel[project.category]} type={typeLabel[project.type]} client={project.partner?.value} year={project.time.year} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" width="2048px" />
    ))}
    </div>
    
    <h2 className={utils.sectionTitle}>What I am doing now</h2>
    <p>Just finished the first semester of my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>, and I am wrapping up a freelance project I have been working with for the past year. I still have a minimalist phone, my beloved Punkt MP02, and I actually got rid of my iPhone after dreading it for months. I tried deleting social media, but for a while I was back on Instagram. Taking a break now, though. When I went to Northern Norway for Christmas, I found my old iPod Nano and that made me very happy.</p>
    
    <p className={utils.small}>Last updated on December 18th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h2 className={utils.sectionTitle}>Contact</h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h2 className={utils.sectionTitle}>Further discovery</h2>
    <p>You can <Link href="/about">learn more about me</Link>, see <Link href="/now">what I am currently listening to</Link>, or find out <Link href="/colophon">check out this site's carbon footprint</Link>.</p>
    </>
  );
}

