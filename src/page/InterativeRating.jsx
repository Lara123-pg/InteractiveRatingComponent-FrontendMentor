import React, { useState } from 'react';
import styled from 'styled-components';

import StarIcon from '../assets/icon-star.svg';

import '../scss/InterativeRating.scss';

import { ThankYouStatePage } from './ThankYouStatePage';

export function InterativeRating() {
    const [buttonSubmit, setButtonSubmit] = useState(false);
    const [buttonSelected, setButtonSelected] = useState();

    function handleClickedButton() {
        let elementButton = document.querySelectorAll('.buttons button');
        
        for(let y = 0; y < elementButton.length; y++) {
            elementButton[y].addEventListener('click', function(e) {
                var idButton = e.target.id;

                var button = document.getElementById(idButton);

                removeStyles();

                button.className='';
                button.classList.add('clickedButton');
            })
        }
    }

    function removeStyles() {
        let buttons = document.querySelectorAll('.buttons button');

        for(let x = 0; x < buttons.length; x++) {
            let element = buttons[x];
            
            element.className='';
            element.classList.add('notClickedButton');         
        }
    }

    function handleSentFeedback() {
        try {
            var buttonClicked = document.querySelector('.clickedButton');
            var valueButtonClicked = buttonClicked.innerHTML;

            var buttonSubmit = document.getElementById('buttonSubmit');

            setButtonSelected(valueButtonClicked);

            if(buttonSubmit.onclick) {
                setButtonSubmit(true);
            } else {
                setButtonSubmit(false);
            }

        } catch(error) {
            console.log('Some error was found - ' + error);
        }
    }

    return(
        <div className='container'>
            <div className='card'>
                { buttonSubmit ? 
                    <ThankYouStatePage onFeedbackSelected={buttonSelected} />
                :

                    (
                        <>
                            <header>
                                <span><img src={StarIcon} alt="Orange Star Icon"/></span>
                            </header>

                            <main>
                                <h1>How did we do?</h1>

                                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                                <div className='buttons'>
                                    <button className='notClickedButton' type='button' id='button1' onClick={handleClickedButton}>1</button>
                                    <button className='notClickedButton' type='button' id='button2' onClick={handleClickedButton}>2</button>
                                    <button className='notClickedButton' type='button' id='button3' onClick={handleClickedButton}>3</button>
                                    <button className='notClickedButton' type='button' id='button4' onClick={handleClickedButton}>4</button>
                                    <button className='notClickedButton' type='button' id='button5' onClick={handleClickedButton}>5</button>
                                </div>

                                <ButtonSubmit 
                                    onClick={handleSentFeedback} 
                                    id='buttonSubmit'
                                    type='button'
                                >
                                        SUBMIT
                                </ButtonSubmit>
                            </main>
                        </>
                    )
                }
                
            </div>

            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.
            </div>
        </div>
    );
}

const ButtonSubmit = styled.button`
    background-color: hsl(25, 97%, 53%);
    
    border: 0;
    border-radius: 50px;

    color: hsl(0, 0%, 100%);

    font-size: 1rem;
    font-weight: 700;

    height: 40px;

    &:hover {
        cursor: pointer;
        
        background-color: hsl(0, 0%, 100%);

        color: hsl(25, 97%, 53%);
    }
`