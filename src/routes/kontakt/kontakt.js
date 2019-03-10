"use strict";

import './kontakt.scss';
import '../home/home.scss';

import imageBackground from '../../assets/kontakt-background.png';



let getOpeningHours = async () => {
  try {
    const response = await fetch(`../../data.json`)
    const json = await response.json();
    return json.data[0].openingHours;
  } catch (err) {
    console.log('Error getting documents', err)
  }
}

let Kontakt = {
  render : async () => {
    let openingHours = await getOpeningHours()
    let view = `
      <section class="kontakt">
        <h1 class="kontakt-headline">
        <div><span class="kontakt-plus home-plus-aveda">+ </span>Kontakt</div>
        </h1>
        <div class="kontakt-text">
          <p>Lassen Sie sich den Kopf verdrehen. Was ist in, was kommt und was geht? Mehr über die neuesten Trendfrisuren und viele schöne Stylingideen für Ihren eigenen Kopf finden Sie hier auf www.haarstudio-heckmann.net zum Ansehen. Am besten Sie probieren die eine oder andere Trendfrisur gleich aus und vereinbaren einen Termin unter 02772 / 54 24 0. Wir freuen uns auf Sie!</p>
        </div>
        <img src="${imageBackground}" alt="">
        <div class="kontakt-r2c1">
        <ul>
            ${ openingHours.map(openingHour => 
                `<li><p>${openingHour.day} ${openingHour.time}</p></li>`
                ).join("")
            }
        </ul>
        </div>
        <div class="kontakt-adress">
          <p>Haarstudio Heckman</p>
          <p>Heckmann Street</p>
          <p>50000 Hecktown</p>
        </div>
        <div class="kontakt-r3">
        </div>
      </section>
    `
    return view
  },
  after_render: async () => {}
}

export default Kontakt;