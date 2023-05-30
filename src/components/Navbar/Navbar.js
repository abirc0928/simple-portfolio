import React from 'react';
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import {Link} from "react-scroll"

const Navbar = (props) => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Andraw</div>
                <Toggle></Toggle>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul> 
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'> 
                        <li className="li-item">Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'> 
                        <li className="li-item">Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'> 
                        <li className="li-item">Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'> 
                        <li className="li-item">Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'> 
                        <li className="li-item">Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
            
        </div>
    );
};

export default Navbar;