import React from "react";
import { Parallax } from 'react-parallax';

const styling ={
  inside: {
    marginTop: 80, 
    marginBottom: 150 
  },
  outside: {
    marginBottom: 250  
  }
}
const Sets=()=>(
<Parallax
    style = {styling.outside}
    blur={{ min: -4, max: 15 }}
    bgImage={require('../../../images/turntable.jpg')}
    bgImageAlt="turntable"
    strength={300}
  >
    <div style= {styling.inside} id="sets">
      <div className="container">
        <h4 className="display-4">Sets</h4>
        <div className="card w-100 h-200">
            <div className="card-body">
              <h5 className="card-title">Coming Soon</h5>
              <h6 className="card-text">A photo collage of previous even setups.</h6>
            </div>
        </div>
      </div>
    </div>
</Parallax>
)

export default Sets;