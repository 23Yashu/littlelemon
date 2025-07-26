import React from 'react'
import marioAdrianA from '../img/MarioAdrianA.jpg';
import marioAdrianB from '../img/MarioAdrianB.jpg';
export default function About() {
  return (
    <section className='about' id='about'>
      <div className='about-us'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <div className='about-text'>
          <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p> <br />
          <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
        </div>
      </div>
      <div className='chef-images'>
        <img src={marioAdrianA} alt="Mario and Adrian" className='chef-image1' />
        <img src={marioAdrianB} alt="Maria and Adrian B" className='chef-image2' />
      </div>
      <div className='mobile-chef-images'>
        <img src={marioAdrianB} alt="Mario and Adrian" className='mobile-chef-image1' />
        <img src={marioAdrianA} alt="Maria and Adrian B" className='mobile-chef-image2' />
      </div>
    </section>
  );
}
