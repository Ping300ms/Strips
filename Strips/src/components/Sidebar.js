import React, { useContext, useEffect } from 'react'

const Sidebar = () => {

  return (
    <div id='sidebar'>

      <div className="sliderbox">
          <p>
            Epaisseur du trait
          </p>
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange">
          </input>
      </div>

      <div className="sliderbox">
          <p>
            Marge
          </p>
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange">
          </input>
      </div>

      <div className="sliderbox">
          <p>
            Ecart inter-case
          </p>
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange">
          </input>
      </div>

    </div>
  );
};

export default Sidebar;