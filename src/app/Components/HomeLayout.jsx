import React from 'react';
import Slider from './Slider';
import About from './About';

const HomeLayout = () => {
    return (
        <div>
            <Slider></Slider>
             <div className="about md:mt-24 mt-16 mb-24">
                  <About></About>
             </div>
        </div>
    );
};

export default HomeLayout;