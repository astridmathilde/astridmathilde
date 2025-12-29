import Link from "next/link";
import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import style from "../../../assets/scss/project.module.scss";
import BlockImage from "../../../components/image";
import BlockImageRow from "../../../components/image_row";

import flowchart from "../../../assets/img/projects/internship-fremtind/flowchart.svg";
import functions from "../../../assets/img/projects/internship-fremtind/flowchart-finished.jpg";
import terms from "../../../assets/img/projects/internship-fremtind/begreper.svg";

import imgProcess1 from "../../../assets/img/projects/internship-fremtind/prosess-0.jpg";
import imgProcess2 from "../../../assets/img/projects/internship-fremtind/prosess-2.jpg";
import imgProcess3 from "../../../assets/img/projects/internship-fremtind/prosess-3.jpg";
import imgProcess4 from "../../../assets/img/projects/internship-fremtind/paper-prototypes.jpg";
import imgProcess7 from "../../../assets/img/projects/internship-fremtind/user-testing.jpg";
import imgProcess8 from "../../../assets/img/projects/internship-fremtind/prosess-9.jpg";
import imgProcess9 from "../../../assets/img/projects/internship-fremtind/prosess-10.jpg";


import imgResult from "../../../assets/img/projects/internship-fremtind/resultat-bilde-3.jpg";
import compareProducts from "../../../assets/img/projects/internship-fremtind/compare-products.jpg";
import palette from "../../../assets/img/projects/internship-fremtind/color-palette.jpg";


const projectID = projects[1];
const pageTitle = projectID.short_title;


export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/projects/internship-fremtid'),
  title: pageTitle + ' – ' + siteTitle
}


export default function fremtind() {
  return (
    <>
    <article className={style.project}>
    <header className={style.header}>
    <h2>{projectID.title}</h2>
    </header>
    
    <div className={style.thumbnail}>
    <BlockImage url={projectID.thumbnail} alt={projectID.title} width="1378" height="1008" priority="true" />
    </div>
    
    <div className={style.container}>
    
    <div className={style.meta + " text-xsmall"}>
    <ul>
    <li key="project_type"><span className={style.label + " text-tiny"}>Type of project:</span> {projectID.category}  ({projectID.type.toLocaleLowerCase()})</li>
    <li key="project_location"><span className={style.label + " text-tiny"}>Location:</span> <a href={projectID.location.url}>{projectID.location.name}</a></li>
    <li key="project_time_frame"><span className={style.label + " text-tiny"}>Time frame:</span> {projectID.time}</li>
    <li key="project_contributors"><span className={style.label + " text-tiny"}>Team:</span>
    <ul className={style.contributors}>
    {projectID.team.map((team) => (
      <li key={team} className={style.contributor}>{team}</li>
    ))}
    </ul>
    </li>
    <li key="project_role"><span className={style.label + " text-tiny"}>My role:</span> {projectID.role}</li>
    <li key="skip_link"><Link href="#result">Skip to result</Link></li>
    </ul>
    </div>
    
    <div className={style.content}>
    <p>This project is a part of a summer internship where I worked in a multi-disiplinary product team with three other students from <a href="https://www.ntnu.edu/" target="_blank" rel="external" title="Norwegian University of Science and Technology">NTNU</a> and <a href="https://www.uio.no/english/index.html" target="_blank" rel="external" title="University of Oslo">UiO</a>. We designed and developed the web application <em>Product Config Manager</em> for managing the configuration of Fremtind's insurance products. The application will be used by product owners, functional architects and developers within <a href="https://fremtind.no" target="_blank" rel="external">Fremtind Forsikring</a>.</p>
    
    <p>I was responsible for project management and visual design, while Kaja, my co-designer, was responsible for planning and facilitating design workshops within the product team. Apart from that, we worked closely together throughout the project.</p> 
    
    <h3>The background</h3>
    <p>Fremtind is offering a number of insurance products to private customers, and they all have different configurations. Previously, the configurations were "hard coded" into Fremtind's applications, making the data difficult to update. To solve this, Fremtind introduced <em>Product Config</em>, a database including every insurance product and their properties. Now it was possible for the applications to fetch the product data using API, and changes made in <em>Product Config</em> would be automatically synchronized across all the applications.</p>
    
    <h3>The problem</h3>
    <p>While <em>Product Config</em> made it easier to update the product data across applications, it was still difficult to view, understand and edit the product configurations. In order to make changes, the product owner had to open the data in a spreadsheet, which consisted of more than a hundred rows and columns, look for the correct cells, edit their values, then send a screenshot of the changes to the system administrator, who would create a SQL statement based on the changes, and run it in the database.</p>
    
    <p>The process was time consuming, and with a high risk of human error.</p>
    
    <h3>The brief</h3>
    <p>We were expected to deliver a web application that fetches the data from "Product Config", making it possible to view the product properties across multiple test environments and make changes. In addition, we were required to use Fremtind's design system <a href="https://jokul.fremtind.no/" target="_blank" rel="external">Jøkul</a>.</p>
    
    <h3>The process</h3>
    <p>Our design process has included the entire team, to ensure that we are all working towards the same goal, and share the same insights and understandings. Involving the developers in the early design phase by inviting them to work on the structure with us, also enabled them to start coding early. In the final design phase we did several iterations with user testing and changes in the design, structure and flow.</p>
    
    <h4>1. Understanding the problem (week 1)</h4>
    <p>We spent a lot of time trying to understand the problem. A document with requirement specification were provided, which we all read through, while trying to wrap our heads around the terms and their definitions.</p>
    
    <BlockImage url={terms} placeholder="false" alt="Terms and their definitions" />
    
    <h4>2. Analyzing the requirements (week 1)</h4>
    <p>We looked at the list of functions and sorted them by priority. The goal was to have a common understanding of what the most important functions are. That way, we could prioritize to implement those first, and do the other functions if we had more time later.</p> 
    
    <BlockImage url={imgProcess1} alt="Requirements specification" />
    
    <h4>3. Creating the application structure (week 1)</h4>
    <p>We (the designers) created 4 use cases based on the prioritized functions. Then we had a workshop making flow charts of each use case. The workshop resulted in an overview of the most important functions, which enabled the developers to start coding right away. After the workshop, I combined all the flowcharts into a map displaying the entire application structure.</p>
    
    <BlockImage url={imgProcess2} alt="Workshop with flow charts" caption="First, we worked individually for 5 minutes. Then we did a round of show-and-tell, before we combined the flow charts into one for each use case "/>
    
    <BlockImage url={flowchart} placeholder="false" alt="Application structure" caption="We made changes on the structure throughout the design process, as we iterated and discovered new and better solutions." />
    
    <h4>3. Sketching wireframes (week 1-2)</h4>
    <p>During the second workshop, we sketched wireframes based on the flow charts we made together. Now, the developers were able to set up the main pages of the application displaying the products and their properties.</p>
    
    <BlockImage url={imgProcess3} alt="Workshop with wireframes" caption="We sketched individually for 5 minutes, then we had a round of show-and-tell before we discussed and did a dot voting. "/>
    
    <h4>4. Making prototypes and doing user tests (week 3-7)</h4>
    <p>We (the designers) made new wireframes of each page and function based on the sketches. We discovered that it was more efficient to make the wireframes with post-its, enabling us to re-use the components and move them around while we discussed different variants. This resulted in a paper prototype that was easy to test on the product owner and present for the rest of team.</p>
    
    <BlockImage url={imgProcess4} alt="Prototyping with post-its" /> 
    
    <p>Additionally, the paper prototypes made it easier to start prototyping in Figma using the design system <a href="https://jokul.fremtind.no/" target="_blank" rel="external">Jøkul</a>. I made the layout with rules for sizes and spacing, and me and Kaja worked on different sections of the pages. After finishing one section, we let the developers know right away so that they could start implementing the design into the application.</p>
    
    <BlockImage url={imgProcess7} alt="User testing" caption="As soon as we had a prototype ready in Figma, we made sure to do some user testing, focusing on the main use cases." /> 
    
    <h4>5. Design and coding simultaneously (week 1-7)</h4>
    <p>After weeks of doing coding and design iterations simultaneously, the application still did not look quite look like the prototype in Figma. We solved this by doing a "progge session" (as we called it), where we sat down together in front of a large screen, and the designers gave feedback while the developers implemented the changes directly. If it was not a quick fix, they added it to their to do-list. We repeated this method a few times in the final project phase.</p>
    
    <BlockImageRow>
    <BlockImage url={imgProcess8} alt="Programming" /> 
    <BlockImage url={imgProcess9} alt="Programming" /> 
    </BlockImageRow>
    
    <h3 id="result">The result</h3>
    <p>We have delivered a solution that makes it smoother and safer to maintain the product data, by minimizing the risk of human error and giving the product owners a closer relationship to the product. Through an iterative design process, we have also made sure that the solution is user-friendly and efficient to use.</p>
    
    <p>By involving the entire team in the early design phase, we have ensured mutual understanding and shared goals. Additionally, it enabled the developers to start coding early, which made the process more efficient and allowed us to add more functionality than expected for this summer. Inviting developers to join the design workshops also provided different perspectives and viewpoints, and forced us to be more critical about our design choices.</p>
    
    <BlockImage url={palette} alt="Color palette" caption="The main page in light and dark mode" /> 
    <BlockImage url={compareProducts} alt="Comparing products" caption="Comparing product data" /> 
    
    <p>Working in a multi-disiplinary product team where we all had different backgrounds, helped me practice articulating my design decisions. It was challenging at times, but it helped with a culture of not being afraid to speak our minds. We were all honest with each other and we dared to have the difficult discussions. I think that was essential for the quality of our delivery.</p>
    
      <BlockImage url={functions} alt="Flytdiagram" caption="An overview of the application displaying the pages and functions." /> 
    
    <BlockImage url={imgResult} alt="Overview of properties" /> 
    
    </div>
    </div>
    </article>
    </>
  )
}