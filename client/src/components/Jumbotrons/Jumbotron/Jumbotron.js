import React from "react"; 

const styling ={
  marginBottom: 180
}

const Jumbotron = props =>(
<div style={styling}>
  <div className="jumbotron jumbotron-fluid" id="mixes">
    <div className="container">
      {props.children}     
    </div>
  </div>
</div>

);

export default Jumbotron;
