import React from 'react';
import './hero.css'
import heroimg from '../../img/hero.jpg'
const hero = () => {
    return (
        <div className='hero'>
            <div className='herosection'>
                <div className='intro'>
                    <h1>Ajay<span>Prasath</span></h1>
                    <p>User Interface Designer</p>
                    <p>I’m UI/UX designer in lucknow , and I’m  very passionate <br />
                        and dedicated to my work..</p>
                    <button>say hello<i class="fa fa-send sendicon"></i></button>
                </div>
            </div>
            <div className='herosection'>
                <div className='photo'>
                    <img src={heroimg} alt="ajayprasath" />
                </div>
            </div>
               <p className='scroll-ind'>scroll down <i class="fa fa-arrow-down"></i></p>
        </div>
    );
};

export default hero;