import React from 'react';
import './Contact.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact =()=>{
    return(
        <div className='contact'>
            <div className='wrapper'>
                <span>BE IN TOUCH WITH US:</span>
                <div className='email'>
                    <input type="text" placeholder='Enter your e-mail...'/>
                    <button>JOIN US</button>
                </div>
                <div className='icons'>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
            </div>
        </div>
    )
}

export default Contact;