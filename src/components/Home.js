import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    
  <div className="home" id="Home">
  <div className="home__bg">
    <div  style={{display:"flex", alignItems:"center",background:"black" ,paddingTop:30 ,position:"fixed",zIndex:5, top:0}} className="header   pxy__30">
      
        <img  className='log' src="/logo.png" alt="" />
      
      <div className="navigation pxy__30">
        <ul style={{paddingTop:20}} className="navbar ">
          <a href="#Home"><li className="nav__items mx__15">Home</li></a>
          <a href="#About"><li className="nav__items mx__15">About</li></a>  
          <a href="#Services"><li className="nav__items mx__15">Services</li> </a>
          <a href="#Portfolio"><li className="nav__items mx__15">Portfolio</li></a></ul>
          </div> 
          </div>
                
        <div className="container">
        <div className="home__content">
          <div  className="home__meta">
            <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
            <h2 style={{margin:"0px 0px 0px 0px"}} className="home__text pz__10">Hi, I’m Souhir</h2>
            <h3 style={{margin:"0px 0px 0px 0px"}}  className="home__text sweet pz__10">JS Developer</h3>
            <h4 style={{margin:"10px 0px 30px 0px"}}  className="home__text pz__10">based in Gafsa </h4>
          </div>
        </div>
</div>
</div>
 </div>
          );
};

export default Home;
