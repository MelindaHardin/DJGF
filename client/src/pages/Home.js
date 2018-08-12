import React from "react";
import Landing from "../components/Jumbotrons/Landing";
import About from "../components/Jumbotrons/About";
import { Parallax, Background } from 'react-parallax';
import Products from "../components/Jumbotrons/Products";
import Other from "../components/Jumbotrons/Other";
import Contact from "../components/Jumbotrons/Contact";

const styling = {
  marginTop: 20
}

const Home =()=>(
<div>
    <Parallax
        blur={{ min: -15, max: 5 }}
        bgImage={require('../images/logoBlack.png')}
        bgImageAlt="the dog"
        strength={200}
    >
        <Landing/>
        <About style= {styling}/>
        <div style={{ height: '200px' }} />
    </Parallax>   
</div>
)
export default Home; 