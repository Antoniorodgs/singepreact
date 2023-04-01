import React from 'react';

export const ContactUs = () => {
    return (
        <div className='contato'>
            <section className='containercontato'>
                <header> Fale Conosco </header>
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

            </div>

            <div className='areacontato'>
                <label htmlFor="">Mensagem</label>
                <input className='areacontato' type="text" placeholder='Conte-nos um pouco mais sobre'/>
                
            </div>

            </form>

            <div className='columbtn'>
            <button className='btnreg'>Enviar</button>
            </div>

            </section>
        </div>
      );
};
