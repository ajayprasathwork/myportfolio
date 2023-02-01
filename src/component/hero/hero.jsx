import React from 'react';
import './hero.css'
import heroimg from '../../img/hero.jpg'
import Fade from 'react-reveal/Fade';

const hero = () => {
    return (
        <div className='hero'>
            <div className='herosection'>
            <Fade bottom>

                <div className='intro'>
                   <h1>Ajay<span>Prasath</span></h1>
                    <p><span className='line'></span>User Interface Designer</p>
                    <p id="p1">I’m UI/UX designer in lucknow , and I’m  very passionate <br />
                        and dedicated to my work..</p>
                    <button>say hello<i class="fa fa-send sendicon"></i></button>
                </div>
                </Fade>
            </div>
            <div className='herosection'>
            <Fade top>

                <div className='photo'>
                    <img src={heroimg} alt="ajayprasath" />
                </div>
                </Fade>
            </div>
               <p className='scroll-ind'>scroll down <i class="fa fa-arrow-down"></i></p>
        </div>
    );
};

export default hero;