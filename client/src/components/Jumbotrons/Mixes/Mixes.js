import React from "react";

const Mixes = props => (
     
<div key={props.id} className="card" onClick={() => props.handleClicked(props.id)}>
    <div className="img-container">
    
      <img alt={props.name} src={props.image} />
      
      
    </div>
  </div>
);
export default Mixes;