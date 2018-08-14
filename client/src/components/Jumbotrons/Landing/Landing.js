import React from "react";
import images from "../../../images/mia.JPG";

const styling={
  image:{
    backgroundImage: "url(" + images + ")",
    backgroundSize: "contain",    
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    height: 650,
    backgroundColor: "#BDC2C8",
    padding: 10,
    marginBottom: 280
  },

  subtitle:{
    padding: 80
  }
  
}

const Landing = ()=>(
<div style = {styling.image}>
    <p className="lead" id="tag" style={styling.subtitle}>The Ambassador...
    <br/>
    DJ Guaranteed-Fresh!!!</p>
</div> 

)

export default Landing; 
