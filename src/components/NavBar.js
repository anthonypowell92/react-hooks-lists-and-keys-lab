import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <div>
    <a key="home" href = "#home">{links[0]}</a>
    <a key ="about" href = "#about">{links[1]}</a>
    <a key ="projects" href = "#projects">{links[2]}</a>
    </div>
    }</nav>;
}

export default NavBar;
