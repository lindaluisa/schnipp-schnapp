"use strict";
import './about.scss';

import imageAbout1 from '../../assets/about-background-1.png';
import imageAbout2 from '../../assets/about-background-2.png';


let About = {
  render : async () => {
      let view = `
        <section class="about">
          <img class="about-image about-image__1" src="${imageAbout1}" class="home-r3_img" alt=""/>
          <div class="about-container"</div>
          <div><span class="about-plus home-plus-aveda">+  </span></div>
              <h1 class="about-headline"> About </h1>
          </div>
          <div class="about-image__2-wrapper">
          <div class="about-text">
          <p>Vor nun genau 27 Jahren eröffnete Petra Heckmann in Pulheim. Seit dem Beginn hat sich viel getan. Der Betrieb ist gewachsen und befindet sich seit 2008 in neuen, modernen und lichtdurchfluteten Räumlichkeiten. Das Team umfasst mittlerweile 7 Mitarbeiter aller Altersklassen, welche sich durch stetige Weiterbildung, Sorgfalt, Kreativität aber vor allem Liebe zum Beruf auszeichnen.</p>
          <p>Egal ob klassische Friseurdienstleitsungen, Festfrisuren, Make-Up und Kosmetik, Haarverlängerungen von Great Lengths, Calligraphy Cut oder Pflege und Wellness von Aveda.</p>
          </div>
          </div>
          <img class="about-image about-image__2" src="${imageAbout2}" class="home-r3_img" alt=""/>
          <p class="about-text__cta">Wer Wert auf schöne Haare legt, ist im <span class="about-text__heckmann">Haarstudio Heckmann</span> genau richtig.</p>
        </section>
      `
      return view
  },
  after_render: async () => {}
      
}

export default About;