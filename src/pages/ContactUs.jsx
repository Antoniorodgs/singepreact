import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const TextAreaExampleTextArea = () => (
    <Form>
      <TextArea placeholder='Tell us more' />
    </Form>
)

export const ContactUs = () => {
    return (
        <div className='contato'>
            <h2>Fale Conosco</h2><br /><hr />
            <section className='containercontato'>
                <form action="#" className="formatt"><br></br>
            <div className='input-boxatt'>
                <label htmlFor="">Assunto</label>
                <div className='columnassunto'>
                    <div className='selectboxassunto'> 
                      <select>
                        <option>Assunto 1</option>
                        <option>Assunto 2</option>
                        <option>Assunto 3</option>
                        <option>Assunto 4</option>
                        <option>Assunto 5</option>
                        <option>Outros</option>
                      </select>
                    </div>
                </div>

            </div><br></br>

            <div className='areacontato'>
                <label htmlFor="">Mensagem</label>
                <textarea className='' type="text" placeholder='Conte-nos um pouco mais sobre'/>
                
            </div>
            {/* <TextAreaExampleTextArea /> */}

            </form>

            <div className='columbtn'>
            <button className='btnreg'>Enviar</button>
            </div>

            </section>
        </div>
      );
};
