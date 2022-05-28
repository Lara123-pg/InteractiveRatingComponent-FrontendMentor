import React from 'react';
import illustrationThankYou from '../assets/illustration-thank-you.svg';

import '../scss/ThankYouState.scss';

export function ThankYouStatePage(props) {
    return(
        <div className='containerThank'>
            <div className='cardThank'>
                <header>
                    <img src={illustrationThankYou} alt="Image of phone with receipt and credit card." />

                    <span>You selected {props.onFeedbackSelected} out of 5</span>
                </header>

                <main>
                    <strong>Thank you!</strong>

                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don´t hesitate to get in touch!</p>
                
                </main>
            </div>
        </div>
    );
}