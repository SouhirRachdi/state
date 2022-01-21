import React from 'react';
import "./Protfolio.css"; 
import photo1 from "../imgg/photo1.jpg"
class Protfolio extends React.Component{
    constructor(props){
      super(props);
      this.state= {fullName:"Souhir Rachdi",bio:"Floraison", 
      profession:"UX Designer",
      imgSrc: photo1,
      show:false,
    };
}
styles={ 
    fontFamily: 'cursive',
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'rgb(245, 22, 189)',
  };

  Buttonchange=()=> this.setState({show:!this.state.show});
  render() {
    return(
   <div  className='Protf'>
   
  <button className='but' onClick={this.Buttonchange}> ClickMe</button>
    {this.state.show? (<div className='flu'>
        <div className='flexy'>
          <h1  style={{paddingRight:0 }} className='text'>About Me</h1>
         <h2 style={{marginTop:0 , marginBottom:8}} className='souhir'>This Me “ {this.state.fullName}</h2> 
       <h5 style={{color:"#fff"}}>“If I had an hour to solve a problem and my life depended on the solution, I would spend the first 55 minutes determining the proper question to ask, for once I know the proper question, I could solve the problem in less than five minutes” <p/>
— Albert Einstein, Theoretical Physicist — </h5>
     <p style={this.styles} >
       {this.state.bio}
       <p/>
      I am a {this.state.profession}
      
     </p>
</div>
<img className='photoss' src={this.state.imgSrc} alt="" />
 </div> ):null}

  
   </div>
  
    );
  
}
}

export default Protfolio;
