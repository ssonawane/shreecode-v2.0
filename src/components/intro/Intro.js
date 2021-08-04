import React from "react";
import style from "./intro.module.css";

function Intro() {
  return (
    <div className={style.container}>
      <h1 className={style.introStyle}>I am Sachin Sonawane</h1>
      <div className={style.typewriter}>
        <h1>Developer, Designer, Freelancer</h1>
      </div>
      <div className={style.intQuesBtn}>
        <button>Interview Questions</button>
      </div>
    </div>
  );
}

export default Intro;
