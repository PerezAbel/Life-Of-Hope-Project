import React from "react"; 

import ImageSlider from './ImageSlider';  
import Intro from './Intro';
import Impact from './Impact';
import Gallery from './Gallery';

import Achievements from "./Achievemnets";
import Newsletter from "./NewsLater"; 
import LatestNews from './LatestNews'

// Make sure all imported components are properly exported from their files
function Home() {
  return (  
    <div className='Main'> 
      <ImageSlider/>
      <Intro/>      
      <Impact />   
      <Gallery /> 
      <Achievements/>  
      <LatestNews/>
     
      {/* <Intend />   */}
      <Newsletter/>
    </div>
  );
}

export default Home;