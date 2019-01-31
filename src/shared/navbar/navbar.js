"use strict";

import './navbar.scss';

let Navbar = {
  render: async () => {
      let view = `
        <nav class="navbar">
          <div class="navbar-items">
            <div class="navbar-item"><a href="/#/about">About</a></div>
            <div class="navbar-item"><a href="/#/services">Services</a></div>
            <div class="navbar-item navbar-logo">
              <a href="/#/">
                <div>Friseur</div>
                <div class="navbar-logo_line"></div>
                <div>Heckmann</div>
              </a>
            </div>
            <div class="navbar-item"><a href="/#/kontakt">Kontakt</a></div>
            <div class="navbar-item"><a href="/#/impressum">Impressum</a></div>
          </div>
        </nav>
      `
      return view
  },
  after_render: async () => { }

}

export default Navbar;