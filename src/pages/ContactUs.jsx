import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ContactUs = () => {

    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');

    const navigate = useNavigate();

    const cancelBottom = (e) => {
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
            <h2>Fale Conosco</h2><br /><hr />
            <section className='containercontato'>
                <form action="#" className="formatt" id="contactUs" onSubmit={handleSubmit}><br></br>
            <div className='input-boxatt'>
                <label htmlFor="">Assunto</label>

                <div className='columnassunto'>
                    <div className='selectboxassunto'> 
                      <select onChange={handleSelect}>
                        <option>Ajuda</option>
                        <option>Conta</option>
                        <option>Notificações</option>
                        <option>Senha</option>
                        <option>Sistema</option>
                        <option>Outros</option>
                      </select>
                    </div>
                </div>

            </div><br></br>

            <div className='areacontato'>
                <label htmlFor="">Mensagem</label>
                <textarea onChange={handleMessage} className='' type="text" placeholder='Conte-nos um pouco mais sobre'/>
            </div>
            {/* <TextAreaExampleTextArea /> */}

            </form>

            <div className='columbtn'>
            <button type="submit" form="contactUs" className='btnreg'>Enviar</button>
            </div>

            </section>
        </div>
      );
};
