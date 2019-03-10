"use strict";

import './index.scss';

import Home from './routes/home/home';
import About from './routes/about/about';
import Error404 from './routes/error/error';
import Kontakt from './routes/kontakt/kontakt';
import Services from './routes/services/services';
import Impressum from './routes/impressum/impressum';

import Navbar from './shared/navbar/navbar';

import Utils from './utils/utils';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/' : Home,
    '/about' : About,
    '/services' : Services,
    '/kontakt' : Kontakt,
    '/impressum' : Impressum
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    
    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
