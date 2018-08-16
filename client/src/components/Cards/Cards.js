import React from "react";

const styling = {
  cards:{
    width: "25rem"
  }
}
const Cards = props =>(
<div className="row justify-content-center">
  <div className="col-4">
      <div className="card" style= {styling.cards}>
        <img className="card-img-top" src={props.img} alt={props.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        
          <p className="card-text">{props.details}</p>
          <button type="button" className="btn btn-primary" data-toggle="modal">
              View Songs
            </button>
        </div>
      </div>
  </div>
</div>
);
export default Cards