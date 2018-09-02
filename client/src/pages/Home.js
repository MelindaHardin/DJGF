import React, { Component } from "react";
import albums from "../albums.json"
import Landing from "../components/Jumbotrons/Landing";
import About from "../components/Jumbotrons/About";
import { Parallax } from 'react-parallax';
import Jumbotron from "../components/Jumbotrons/Jumbotron";
import Mixes from "../components/Jumbotrons/Mixes";
import Cards from "../components/Cards/Cards"
import Sets from "../components/Jumbotrons/Sets";
import Contact from "../components/Jumbotrons/Contact";

const styling = {
  backgroundColor: "black"
}

class Home extends Component{
state ={
  albums,
  clicked: []
}


handleClicked = id => {

}


  render (){
    return (
      <div style={styling}>
      <Parallax
        blur={-15}
        bgImage={require('../images/logoBlack.png')}
        bgImageAlt="G-Fresh logo"
        bgWidth= "auto"
        bgHeight= "auto"
        strength={425}
      >
        <Landing />
        <About />
        
        <Jumbotron>
          <Mixes>
            {this.state.albums.map(Album => {
              return (
                <Cards
                key = {Album.id}
                front= {Album.front}
                name={Album.name}
                details = {Album.details}
                handleClicked={this.handleClicked}
              />
              );
            })}            
          </Mixes>
        </Jumbotron>

        <Sets />
      
        <Jumbotron>
          <Contact />
        </Jumbotron>

      </Parallax>   

    </div>

    )
  }
}


export default Home; 