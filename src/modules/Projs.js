import React from 'react';
import JavaScript from '../assets/JavaScript-Logo.png';
import './Projs.css';

function Projs(){
    return(
        <div>
            <div className="projMain">
                <div className="skillHead">
                    <h1>Skills</h1>
                </div>
                <div className='skillCont'>
                    <div className='ProjCont'>
                        <img alt = {"test"} className="imgCont" src={JavaScript} />
                        <caption>Test Caption</caption>
                    </div>
                    <div className='ProjCont'>
                        <img alt = {"test"} className="imgCont" src={JavaScript} />
                        <caption>Test Caption</caption>
                    </div>
                    <div className='ProjCont'>
                        <img alt = {"test"} className="imgCont" src={JavaScript} />
                        <caption>Test Caption</caption>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default Projs