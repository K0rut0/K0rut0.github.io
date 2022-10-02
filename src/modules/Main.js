import React from 'react';
import Kannasip from '../assets/Kannasip.gif';
import './Main.css';

function Main(){
    return(
        <div className='main-div'>
            <div>
                <img alt={"kannasip"} className="imgTest" src={Kannasip}/>
            </div>
        </div>
    )
}

export default Main;