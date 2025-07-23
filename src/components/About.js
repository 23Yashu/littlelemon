import React from 'react'
import marioAdrianA from '../img/MarioAdrianA.jpg';
import marioAdrianB from '../img/MarioAdrianB.jpg';
export default function About() {
  return (
    <section className='about'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p> <br/>
        <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
        <img src={marioAdrianA} alt="Mario and Adrian" />
        <img src={marioAdrianB} alt="Maria and Adrian B" />
    </section>
  );
}
