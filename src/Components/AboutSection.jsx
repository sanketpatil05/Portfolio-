import styles from "./Styles/AboutSection.module.css"
import Fade from "react-reveal/Fade"

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="/IMG_9134.jpg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Sanket Patil</span>{" "}
            </h2>
            <p>
              A web developer with excellent problem solving skills and ability
              to perform well in a team. Proficient in front-end, back-end and
              data structures and algorithms.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
