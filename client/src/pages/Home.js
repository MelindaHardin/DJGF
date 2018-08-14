import React from "react";
import Landing from "../components/Jumbotrons/Landing";
import About from "../components/Jumbotrons/About";
import { Parallax } from 'react-parallax';
import Jumbotron from "../components/Jumbotrons/Jumbotron";
import Mixes from "../components/Jumbotrons/Mixes";
import Sets from "../components/Jumbotrons/Sets";
import Contact from "../components/Jumbotrons/Contact";

const Home =()=>(
<div>
  <Parallax
    blur={-15}
    bgImage={require('../images/logoBlack.png')}
    bgImageAlt="G-Fresh logo"
    bgWidth= "auto"
    bgHeight= "auto"
    strength={450}
  >
    <Landing/>
    <About/>
    
    <Jumbotron>
      <Mixes/>
    </Jumbotron>

    <Jumbotron>
      <Sets/>
    </Jumbotron>

    <Jumbotron>
      <Contact/>
    </Jumbotron>
  
  </Parallax>   

</div>
)
export default Home; 