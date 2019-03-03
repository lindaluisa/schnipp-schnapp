"use strict";

import './navbar.scss';

let Navbar = {

  render: async () => {
      let view = `
        <nav class="navbar">
          <div class="navbar-burger">
            <div class="navbar-burger_line navbar-burger_line_one"></div>
            <div class="navbar-burger_line navbar-burger_line_two"></div>
            <div class="navbar-burger_line navbar-burger_line_three"></div>
          </div>
          <div class="navbar-items">
            <div class="navbar-item navbar-item_about"><a href="/#/about">About</a></div>
            <div class="navbar-item navbar-item_services"><a href="/#/services">Services</a></div>
            <div class="navbar-item navbar-item_kontakt"><a href="/#/kontakt">Kontakt</a></div>
            <div class="navbar-item navbar-item_impressum"><a href="/#/impressum">Impressum</a></div>
            <div class="navbar-item navbar-item_logo">
              <a href="/#/">
                <div>Friseur</div>
                <div class="navbar-item_logo_line"></div>
                <div>Heckmann</div>
              </a>
            </div>
          </div>
        </nav>
      `
      return view
  },
  after_render: async () => {
    const burger = document.querySelector(".navbar-burger");
    const lineOne = document.querySelector('.navbar-burger_line_one');
    const lineTwo = document.querySelector('.navbar-burger_line_two');
    const lineThree = document.querySelector('.navbar-burger_line_three');
    const pageContent = document.querySelector("#page_container");
    const menu = document.querySelector(".navbar-items");
    
    const burgerAnimation = () => {
      if (lineOne.classList.contains('showOne')) {
        lineOne.classList.add('hideOne');
        lineOne.classList.remove('showOne');
        lineTwo.classList.add('hideTwo');
        lineTwo.classList.remove('showTwo');
        lineThree.classList.add('hideThree');
        lineThree.classList.remove('showThree');
        menu.style.display = "none";
        pageContent.style.display = "inherit";
      } else {
        lineOne.classList.add('showOne');
        lineOne.classList.remove('hideOne');
        lineTwo.classList.add('showTwo');
        lineTwo.classList.remove('hideTwo');
        lineThree.classList.add('showThree');
        lineThree.classList.remove('hideThree');
        menu.style.display = "grid";
        pageContent.style.display = "none";
      }
    }
    
    burger.addEventListener('click', burgerAnimation);

  }
}

export default Navbar;