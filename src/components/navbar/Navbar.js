import React from "react";
import style from "./Navbar.module.css";

function Navabar() {
  return (
    <React.Fragment>
      <header>
        <h1></h1>
      </header>
      <nav className={style.mainBar}>
        <div className={style.navBar}>
          <a href="#">CODER</a>
          <a href="#" className={style.changeStack}>
            <span>CHANGE STACK</span>
          </a>
          <a href="#">
            <span>WORK</span>
          </a>
          <a href="#">
            <span>BLOG</span>
          </a>
          <a href="#">
            <span>ABOUT ME</span>
          </a>
          <div className={style.drpdwnMenu}>
            <p>1.Javascript</p>
            <p>2.React</p>
            <p>3.Sass</p>
          </div>
        </div>
        <div className={style.searchBar}>
          <input type="text" placeholder="Search here" />
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navabar;
