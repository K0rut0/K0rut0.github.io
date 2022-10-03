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
                    non magna ut semper. Nunc eget lectus convallis, rhoncus est vitae, feugiat tellus. Proin vel dui massa. Nullam at congue sem, 
                    non laoreet est. Phasellus dignissim in purus blandit pulvinar. In eget scelerisque nunc. Duis non odio sapien. 
                    Nulla eros lacus, consectetur ut pulvinar id, placerat rhoncus turpis. Proin a 
                    vestibulum lacus. Aenean lorem eros, auctor nec ante non, vestibulum malesuada felis.
                </p>
            </div>
        </div>
    )
}

export default Main;