import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Filpcart.com clone",
    img: "/Filpcart.png",
    link: "https://cocky-mcclintock-3cafba.netlify.app/home.html",
    git: "https://github.com/vikasg57/flipkart-clone",
    about:
      "This is e-commerce website used for shopping wide range of products.This was a team project where I with my teammates had created. Tech Stack which we used in this project is HTML, CSS, JS, NodeJs, Express.",
    stacks: [
     // <SiReact className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Frazzo.com clone",
    img: "/Frazzo.png",
    link: "https://fraazo.netlify.app/",
    git: "https://github.com/venkat0086/fraazo",
    about:
      " This is e-commerce application for fruits and vegetables. This was a team project where I with my teammates had created. Tech Stack which we used in this project is HTML, CSS, JS.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  // {
  //   name: "Zara.com clone",
  //   img: "/zara.jpg",
  //   link: "https://thotapavankumar.github.io/Zara_Project_Clone/",
  //   git: "https://github.com/Gajanan-Watt/zara_web.git",
  //   about:
  //     " It is an e-commerce website having varieties of luxury items which are of high quality. We have tried to clone the pixel perfect website with the help of HTML. Implemented using HTML, CSS and javascript.",
  //   stacks: [
  //     // <SiReact className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
  // {
  //   name: "You Tube App",
  //   img: "/doggo2.png",
  //   link: "https://pixel-pic.vercel.app/",
  //   git: "https://github.com/Gajanan-Watt/pixelArt.git",
  //   about:
  //     "This project will let you design the pixel art. Let your creativity flow and convert them to images",
  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
  // {
  //   name: "Airbnb.com clone",
  //   img: "/Airbnb.png",
  //   link: "https://airbnb-clone-one-weld.vercel.app/",
  //   git: "https://github.com/ks-1007/Airbnb-clone",
  //   about:
  //     "Airbnb is a hotel booking online platform. Implemented features to search for hotels based on ratings, reviews and price range and then booking it after selecting check-in & check-out dates",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiRedux className={styles.stackIcon} />,

  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
  // {
  //   name: "Contio",
  //   img: "/contio.png",
  //   link: "https://contio.netlify.app/",
  //   git: "https://github.com/chandan1499/contio",
  //   about:
  //     "Contio is an online portal where anyone can ask there doubts and anyone can become a mentor to help their peers using a built-in chat app",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiNodedotjs className={styles.stackIcon} />,
  //     <SiExpress className={styles.stackIcon} />,
  //     <SiMongodb className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },

  // {
  //   name: "Sephora.com clone",
  //   img: "/sephora.png",
  //   link: "https://project-sephora.vercel.app/",
  //   git: "https://github.com/ks-1007/Project-Sephora",
  //   about:
  //     "Sephora is an American e-commerce website which sells beauty products. Features are implemented to select products from carousel and add products to cart and do CRUD operations",
  //   stacks: [
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}