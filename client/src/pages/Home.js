import React from "react";
import Landing from "../components/Jumbotrons/Landing";
import About from "../components/Jumbotrons/About";
import { Parallax, Background } from 'react-parallax';
import Jumbotron from "../components/Jumbotrons/Jumbotron";
import Mixes from "../components/Jumbotrons/Mixes";
import Other from "../components/Jumbotrons/Other";
import Contact from "../components/Jumbotrons/Contact";

const Home =()=>(
<div>
  <Parallax
      blur={5}
      bgImage={require('../images/logoBlack.png')}
      bgImageAlt="G-Fresh logo"
      strength={200}
  >
      <Landing/>
      <About/>
      <Jumbotron>
      <Mixes/>
      </Jumbotron>
  </Parallax>   

</div>
)
export default Home; 