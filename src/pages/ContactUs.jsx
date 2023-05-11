import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ContactUs = () => {

    const allMsg = [];

    let [message, setMessage] = useState('');
    let [textArea, setTextArea] = useState('');
    let [messagesArray, setMessagesArray] = useState([]);

    const handleTextArea = async (e) => {
      setTextArea(e.target.value);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

    }

    return (
        <div className='contato'>

            <div id="contactArea">
              <div id="usCompany">
                <h4>SINGEP</h4>
              </div>
              <h4>Message: </h4><br></br>
              <p>
              {
                message
              }</p>

            </div>
            
            <section className='containercontato'>
                <form action="#" className="formatt" id="contactUs" onSubmit={handleSubmit}>
                  <div id="fieldButton">
                    <textarea onChange={handleTextArea} className='textArea' type="text" placeholder='Conte-nos um pouco mais sobre'/>
                    <button type="submit" form="contactUs" className='btnreg' id='sendMessage'>Enviar</button>
                  </div>
                </form>

                <div className='columbtn'>

                </div>

            </section>
        </div>
      );
};
