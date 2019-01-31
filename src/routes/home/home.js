"use strict";

import './home.scss';

import imageMain from '../../assets/main_alternative.jpg';
import imageSecond from '../../assets/mandeln.jpg';

let Home = {
    render : async () => {
        let view = `
          <section class="home">
            <div class="home-r1">
              <img src="${imageMain}" class="home-r1_img" alt=""/>
            </div>
            <h1 class="home-headline">
              <div><span class="home-plus">+</span>Aveda</div>
              <div>&nbsp;&nbsp;&nbsp;Mission</div>
            </h1>
            <div class="home-r2">
              <div class="home-r2c1">
                <img src="${imageSecond}" class="home-r2_img" alt=""/>
              </div>
              <div class="home-r2c2">
                <p class="home-plus">+&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;+</p>
                <h2 class="home-r2c2_headline">"LIEBE IST DER URSPRUNG ALLER DINGE"</h2>
                <p class="home-r2c2_text">5,000 Jahre Erfahrung liegen in der traditionellen indischen Heillehre des Ayurveda, die auf dem Wissen des Lebens und der Verbundenheit aller Dinge beruht.</p>
                <p class="home-r2c2_text">Die Ziele und Herzensangelegenheiten von Horst gewannen eigenen Impetus im Zusammenhang mit einer größeren globalen Bewegung hin zu Ausgeglichenheit und Harmonie für den Einzelnen und die Gemeinschaft.</p>
                </div>
            </div>
          </section>
        `
        return view
    },
    after_render: async () => {}
    }

export default Home;