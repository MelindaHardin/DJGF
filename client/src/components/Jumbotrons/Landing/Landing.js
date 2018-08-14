import React from "react";
import images from "../../../images/mia.JPG";

const styling={
  backgroundImage: "url(" + images + ")",
  backgroundSize: "contain",    
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  height: 650,
  backgroundColor: "#BDC2C8",
  padding: 10,
  marginBottom: 280
}

const Landing = ()=>(
<div style = {styling}>
    <p className="lead" id="tag">The Ambassador...
    DJ Guaranteed-Fresh!!!</p>
</div> 

)

export default Landing; 
