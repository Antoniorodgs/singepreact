import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { io } = require("socket.io-client");

let socket = io("http://localhost:3033");

export const ContactUs = () => {

    const allMsg = [];

    let [message, setMessage] = useState('');
    let [textArea, setTextArea] = useState('');
    let [messagesArray, setMessagesArray] = useState([]);
    
    socket.on("msg", (data) => {
      let newMsg = `${data.con.id} : ${data.con.msg}`;
      setMessage(newMsg);
      allMsg.push(newMsg);
      setMessagesArray(allMsg)
    })

    const handleTextArea = async (e) => {
      setTextArea(e.target.value);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        socket.emit("message", {msg: textArea, id: socket.id});

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
