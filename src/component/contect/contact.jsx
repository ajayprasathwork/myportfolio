import React from 'react';
import './contact.css'
import Fade from 'react-reveal/Fade';

const contact = () => {
    return (
        <div className='contact'>
            <div className='contact-header'>
                 <h1 className='section-head'>Contact Me</h1>
                 <p className='section-sub'>Get in touch</p>
            </div>
            <div className='contact-item'>
            <div className='contact-items'>
            <h2>Talk to me </h2>
                <Fade left>
                <div className='contect-box'>
                <i class="fa fa-envelope contact-icon"></i>
                <p className='contact-icon-name'>Email</p>
                <p className='contact-text'>ajayprasath.work@gmail.com</p>
                <p className='withme'>with me <i class="fa fa-arrow-right"></i></p>
                </div>
                </Fade>
                <Fade left>
                <div className='contect-box'>
                <i class="fa fa-whatsapp contact-icon"></i>
                <p  className='contact-icon-name'>Whatsapp</p>
                <p className='contact-text'>+91 9360722678</p>
                <p className='withme'>with me <i class="fa fa-arrow-right"></i></p>
                </div>
                </Fade>
                <Fade left>
                <div className='contect-box'>
                <i class="fa fa-comment contact-icon"></i>
                                <p  className='contact-icon-name'>Messanger</p>
                <p className='contact-text'>user.fb123</p>
                <p className='withme'>with me <i class="fa fa-arrow-right"></i></p>
                </div>
                </Fade>
            </div>
            <div className='contact-items'>
                <h2>Write me your project </h2>
                <div className='contactfrom'>
                <form>
                    <Fade right>
                    <input placeholder='Insert your name' type={"text"}/>
                    </Fade>
                    <Fade right>
                     <input placeholder='Insert your email'  type={"text"}/>
                    </Fade>
                    <Fade right>
                     <input placeholder='Write your project' type={"text"}/>
                     </Fade>
                     <Fade right>

                    <textarea  rows="4" cols="50">Write your project</textarea>
                    </Fade>
                    <Fade right>
                        
                                            <button>Send Message<i class="fa fa-send sendicon"></i></button>
                                            </Fade>



                </form>
                </div>

            </div>
            </div>
        </div>
    );
};

export default contact;