"use strict";

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
      <ul>
          ${ openingHours.map(openingHour => 
              `<li>${openingHour.day} ${openingHour.time}</li>`
              )
          }
      </ul>
    `
    return view
  },
  after_render: async () => {}
}

export default Kontakt;