import React from 'react';
import { useHistory } from 'react-router-dom';
import Brand from '../components/Brand';
import Button from '../components/Button';

import illustration from '../images/illustration-1.png';


const Landing = _ => {

    const history = useHistory();

    return(
        <div className="page">
            <div className="landing-header">
                <Brand />
                <div className="landing-menu">
                    <a href="/about">About</a>
                    <a href="/signin">Sign In</a>
                    <Button title={'Register'} onClick={() => history.push('/signup')} />
                </div>
            </div>
            <div className="landing-content">
                <div className="column center-vertically">
                    <h1>
                        Because <br />
                            bookmark bar in <br />
                            your browser is <br />
                            not enough.
                        </h1>
                    <Button title={'Get Started'} onClick={() => history.push('/signup')} />
                </div>
                <div className="column illustration">
                    <img src={illustration} alt="Illustration" />
                    <span className="attribution">
                        Art by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Ouch.pics</a>
                    </span>
                </div>
            </div>
        </div>
    );

}
export default Landing;