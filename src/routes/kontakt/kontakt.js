"use strict";

import './kontakt.scss';

let getOpeningHours = async () => {
  try {
    const response = await fetch(`../../data.json`)
    const json = await response.json();
    return json.data[0].openingHours;
  } catch (err) {
    console.log('Error getting documents', err)
  } 
}

window.initMap = () => {
  var heckmann = {lat: 50.9974041, lng: 6.8038675};
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: heckmann});
  var marker = new google.maps.Marker({position: heckmann, map: map});
}

let Kontakt = {
  render : async () => {
    let openingHours = await getOpeningHours();
    let view = `
    <ul>
    ${ openingHours.map(openingHour => 
      `<li>${openingHour.day} ${openingHour.time}</li>`
      )
    }
    </ul>
    <div id="map"></div>
    `
    return view;
  },
  after_render: async () => {}
}

export default Kontakt;