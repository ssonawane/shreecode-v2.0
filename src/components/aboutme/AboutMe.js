import React from "react";
import style from "./AboutMe.module.css";
function AboutMe() {
  return (
    <div className={style.aboutMeContainer}>
      <div className={style.abtMe}>
        <div>
          <div className={style.myDataContainer}>
            <p>Name:</p>
            <p>Sachin Kautikrao Sonawane</p>
          </div>
          <div>
            <p>Profile:</p>
            <p>Web developer</p>
          </div>
          <div>
            <p>Email:</p>
            <p>sachins2119@gmail.com</p>
          </div>
          <div className={style.skillset}>
            <p>Skill</p>
            <p>HTML 85%</p>
            <progress id="file" max="100" value="85"></progress>
          </div>
        </div>
        <div>I am a web developer</div>
      </div>
    </div>
  );
}

export default AboutMe;
