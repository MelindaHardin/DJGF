import React from "react";
import { Parallax } from 'react-parallax';

const styling ={
  inside: {
    marginTop: 80, 
    marginBottom: 180 
  },
  outside: {
    marginBottom: 250  
  }
}

const About =()=>(

    <Parallax
    style = {styling.outside}
    blur={9}
    bgImage={require('../../../images/turntable.jpg')}
    bgImageAlt="turntable"
    strength={300}
  >
    <div style={styling.inside} className="container"id="about">
      <h4 className="display-4">About</h4>
      <p className="lead">Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going
        to enjoy our breakfast. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they
        don’t want you to jetski, they don’t want you to smile. Surround yourself with angels. It’s on you how you want to
        live your life. Everyone has a choice. I pick my choice, squeaky clean. Mogul talk. It’s important to use cocoa butter.
        It’s the key to more success, why not live smooth? Why live rough? Watch your back, but more importantly when you
        get out the shower, dry your back, it’s a cold world out there. The ladies always say Khaled you smell good, I use
        no cologne. Cocoa butter is the key. Let me be clear, you have to make it through the jungle to make it to paradise,
        that’s the key, Lion! Don’t ever play yourself. Mogul talk. They don’t want us to eat. Watch your back, but more
        importantly when you get out the shower, dry your back, it’s a cold world out there. They key is to have every key,
        the key to open every door. Special cloth alert. They key is to have every key, the key to open every door. I’m giving
        you cloth talk, cloth. Special cloth alert, cut from a special cloth. Eliptical talk. It’s important to use cocoa
        butter. It’s the key to more success, why not live smooth? Why live rough? Surround yourself with angels. Celebrate
        success right, the only way, apple. The key to more success is to get a massage once a week, very important, major
        key, cloth talk. Congratulations, you played yourself. You should never complain, complaining is a weak emotion,
        you got life, we breathing, we blessed. Hammock talk come soon. You should never complain, complaining is a weak
        emotion, you got life, we breathing, we blessed. Put it this way, it took me twenty five years to get these plants,
        twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started.</p>
    </div>
  </Parallax>
)

export default About;