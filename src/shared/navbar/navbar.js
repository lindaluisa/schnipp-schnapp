"use strict";

import './navbar.scss';

let Navbar = {
  render: async () => {
      let view = `
           <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-start">
                <a class="navbar-item" href="/#/">Home</a>
                <a class="navbar-item" href="/#/about">About</a>
                <a class="navbar-item" href="/#/services">Services</a>
                <a class="navbar-item" href="/#/kontakt">Kontakt</a>
                <a class="navbar-item" href="/#/impressum">Impressum</a>
            </div>
          </nav>
      `
      return view
  },
  after_render: async () => { }

}

export default Navbar;