import React from 'react';
import Kannasip from '../assets/Kannasip.gif';
import './Main.css';

function Main(){
    return(
        <div className='main-div'>
            <div>
                <img alt={"kannasip"} className="imgTest" src={Kannasip}/>
            </div>
            <div className='main-desc'>
                <h1>Hello!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero tortor, varius at purus vitae, ullamcorper lacinia ante. 
                    Fusce velit lacus, rutrum sed justo non, tempor ultricies ex. Phasellus at justo leo. Nullam sit amet neque lectus. Sed ullamcorper 
                    non magna ut semper. 
                </p>
            </div>
        </div>
    )   
}

export default Main;