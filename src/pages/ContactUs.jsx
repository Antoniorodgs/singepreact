import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ContactUs = () => {

    document.documentElement.requestFullscreen();

    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');

    const navigate = useNavigate();

    const cancelBottom = (e) => {
      console.log(subject, message);
      setSubject('');
      setMessage('');
    }

    const handleSelect = (e) => {
        setSubject(e.target.value);
        console.log(subject);
    }

    const handleMessage = (e) => {
      setMessage(e.target.value);
      console.log(message);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(subject, message);

        let whatsappOwner = "11959050868";
        subject = JSON.stringify(subject);
        message = JSON.stringify(message);
        let objJson = {whatsappOwner, subject, message};

        try {
      
            const resp = await axios.post('http://localhost:3033/singep/contactUs/message', objJson, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });
    
            alert(resp.data.body);
            if(resp.status === 200) cancelBottom();
      
          } catch(error) {
      
            let data = JSON.parse(error.request.response);
            alert(data.body);
      
          }

    }

    return (
        <div className='contato'>

            <div id="contactArea">
              <div id="usCompany">
                <h4>SINGEP</h4>
              </div>
            </div>
            
            <section className='containercontato'>
                <form action="#" className="formatt" id="contactUs" onSubmit={handleSubmit}>
                  <div className='input-boxatt'>
                
                  </div>
                  <div id="fieldButton">
                    <textarea onChange={handleMessage} className='textArea' type="text" placeholder='Conte-nos um pouco mais sobre'/>
                    <button type="submit" form="contactUs" className='btnreg' id='sendMessage'>Enviar</button>
                  </div>
                </form>

                <div className='columbtn'>

                </div>

            </section>
        </div>
      );
};
