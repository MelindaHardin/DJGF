import React, { Component }from "react";
import albums from "../../albums.json";

const styling = {
  cards:{
    width: "25rem"
  }
}

// const albumCovers = albums.map((albums)=>
    
    
    
// )


class Cards extends Component{

  state = {
    albums,
    clicked:[]
  }


  handleClicked = id =>{
    //FUNCTION HERE THAT SHOWS THE MODAL FOR THE BACK OF THE ALBUM COVER

  }

  render (){

    return (
     
      <div className="row justify-content-center">
        <div className="col-4">
            <div className="card" style= {styling.cards}>
              <img className="card-img-top" src={this.props.img} alt={this.props.name}/>
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
              
                <p className="card-text">{this.props.details}</p>
                <button type="button" className="btn btn-primary" data-toggle="modal">
                    View Songs
                  </button>
              </div>
            </div>
        </div>
      </div>
    )
  }

}  
 
export default Cards;

