"use strict";

let About = {
  render : async () => {
      let view = `
          <section class="section">
              <h1> About </h1>
          </section>
      `
      return view
  },
  after_render: async () => {}
      
}

export default About;