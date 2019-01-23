import React from 'react';
import './About.css';

import smile from './acmt-smiling.jpg';
import dress from './acmt-dressed-up.jpg';

class About extends React.Component {
  render() {
    return(
      <div className="about-div">
        <div className="about-heading">
          <h1>About</h1>
          <hr/>
        </div>

        <img src={smile} alt="aaron and marissa smile"/>

        <p className="about-text">
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside
          cable strike colors. Bring a spring upon her cable holystone blow the man down
          spanker Shiver me timbers to go on account lookout wherry doubloon chase.
          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
          heave to.
        </p>

        <img src={dress} alt="aaron and marissa dressed up"/>

        <p className="about-text">
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside
          cable strike colors. Bring a spring upon her cable holystone blow the man down
          spanker Shiver me timbers to go on account lookout wherry doubloon chase.
          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
          heave to.
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside
          cable strike colors. Bring a spring upon her cable holystone blow the man down
          spanker Shiver me timbers to go on account lookout wherry doubloon chase.
          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
          heave to.
        </p>
      </div>
    )
  }
}

export default About;
