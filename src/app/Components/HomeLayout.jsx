import React from 'react';
import Slider from './Slider';
import About from './About';
import Services from './Services';

const HomeLayout = () => {
    return (
        <div>
            <Slider></Slider>
             <div className="about md:mt-24 mt-16 mb-24">
                  <About></About>
             </div>
             <div className="services md:mt-24 mt-16 mb-24">
                 <Services></Services>
             </div>
        </div>
    );
};

export default HomeLayout;