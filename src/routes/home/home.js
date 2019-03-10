"use strict";

import './home.scss';

import imageMain from '../../assets/main_alternative.jpg';
import imageMobileMain from '../../assets/main_mobile.jpg';
import imageMobileMain2 from '../../assets/main_mobile2.jpg';
import imageSecond from '../../assets/mandeln.jpg';

let Home = {
    render : async () => {
        let view = `
          <section class="home">
            <div class="home-r1">
              <picture>
                  <source media="(min-width: 768px)" srcset="${imageMain}">
                  <img src="${imageMobileMain}" alt="">
              </picture>
            </div>
            <h1 class="home-headline">
              <div><span class="home-plus home-plus-aveda">+</span>Aveda</div>
              <div>&nbsp;&nbsp;&nbsp;Mission</div>
            </h1>
            <div class="home-r2">
              <img src="${imageMobileMain2}" alt="">
            </div>
            <div class="home-r3">
              <div class="home-r3c1">
                <img src="${imageSecond}" class="home-r3_img" alt=""/>
              </div>
              <div class="home-r3c2">
                <p class="home-plus">+&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;+</p>
                <h2 class="home-r3c2_headline">"LIEBE IST DER<br>URSPRUNG ALLER DINGE"</h2>
                <p class="home-r3c2_text">AVEDA HAT SICH ZUM ZIEL GESETZT, SORGSAM UND RESPEKTVOLL MIT DER UMWELT UMZUGEHEN. DIESE PHILOSOPHIE KOMMT SOWOHL IN UNSEREN PRODUKTEN ALS AUCH IN UNSEREM BEMÜHEN UM DAS WOHLERGEHEN DER MITMENSCHEN ZUM AUSDRUCK. AVEDA WILL IM VERANTWORTUNGSBEWUSSTEN UMGANG MIT DER NATUR UND IHREN RESSOURCEN EINE FÜHRUNGSROLLE ÜBERNEHMEN - NICHT NUR IN DER WELT DER KOSMETIK SONDERN AUCH ZUGUNSTEN DER WELT, IN DER WIR LEBEN.</p>
              </div>
            </div>
          </section>
        `
        return view
    },
    after_render: async () => {}
    }

export default Home;