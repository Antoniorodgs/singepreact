import React, { useState } from 'react';
import { images } from '../../constants';

export const Home = (props) => {
  
  return (
    <div>
      <header className="header-home">
        <div className="headerhome containerhome">
          <a href="#">
            <img className="imglogo" src={images.singepLogo} alt="Singep" />
          </a>

          <nav aria-label="primaria">
            <ul className="header-menu font-1-m">
              <li>
                <a href="/login">Entrar</a>
              </li>
              <li>
                <a href="/register">Registrar</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="introducao-bg">
        <div className="introducao containerhome">
          <div className="introducao-conteudo">
            
            <br /><br />
            <h1 class="font-2-xxl">
              Facilite suas operações <span className="cor-p1">.</span>
            </h1>
            <p className="font-2-1">
              Otimize seus processos e faça seu negocio crescer com o sistema
              inteligente de gerenciamento de produtos SINGEP.
            </p>
            <a className="botao1" href="#">
              Conheça nossa equipe
            </a>
          </div>
          <div className="introducao-imagem">
            <img className="tratarimg" src={images.introducao} alt="" />
          </div>
        </div>
      </main>

      <article className="equipe-lista">
      <h1 className="containerhome font-2-xxl">SINGEP</h1><br/>
      <div className='containerhome'>
      <img src={images.innovation} className='tratarimg'></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis neque sed porta. Morbi laoreet ornare vehicula. Suspendisse varius scelerisque justo, sit amet 
        scelerisque arcu. Maecenas ut neque ut diam molestie feugiat. Duis massa nibh, sollicitudin ac ullamcorper a, auctor rhoncus sem. Vestibulum tortor tortor, volutpat in lobortis id,
         cursus vitae ipsum. Curabitur libero massa, ultrices iaculis vehicula eget, placerat eget purus.</p>
      </div><br/><br/><br/> 
      <h1 className="containerhome font-2-xxl">Como funciona ?</h1><br/>
      <div className='containerhome'>
      <img src={images.womanBuying} className='tratarimg'></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis neque sed porta. Morbi laoreet ornare vehicula. Suspendisse varius scelerisque justo, sit amet 
        scelerisque arcu. Maecenas ut neque ut diam molestie feugiat. Duis massa nibh, sollicitudin ac ullamcorper a, auctor rhoncus sem. Vestibulum tortor tortor, volutpat in lobortis id,
         cursus vitae ipsum. Curabitur libero massa, ultrices iaculis vehicula eget, placerat eget purus.</p>
      </div><br/><br/><br/> 
        <h1 className="containerhome font-2-xxl">Nosso time e composto</h1><br/><br/>
        <ul className="imagenstratamento">
          <li className='imagemEquipe'>
            <a href="">
              <img src={images.amaro} alt="Amaro" />
              <h3 className="font-2-xl">Amaro</h3>
              <span className="font-3-m">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                dolorem autem expedita quasi qui vitae, eaque pariatur
                exercitationem quidem at?
              </span>
            </a>
          </li>

          <li className='imagemEquipe'>
            <a href="">
              <img src={images.antonio} alt="Antonio" />
              <h3 className="font-2-xl">Antonio</h3>
              <span className="font-3-m">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                dolorem autem expedita quasi qui vitae, eaque pariatur
                exercitationem quidem at?
              </span>
            </a>
          </li>

          <li className='imagemEquipe'>
            <a href="https://www.linkedin.com/in/gabriel-rodrigues-fernandes-4824011b7/" target="_blank">
              <img src={images.gabriel} alt="Gabriel" />
              <h3 className="font-2-xl">Gabriel</h3>
              <span className="font-3-m">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                dolorem autem expedita quasi qui vitae, eaque pariatur
                exercitationem quidem at?
              </span>
            </a>
          </li>
        </ul>
      </article>

      <footer className='footer-bghome'>
        <div className='footersi containerhome'>
            <img className="imglogo" src={images.singepLogo} alt="Singep" />
            <div className='footersi-contato'>
                <h1>Contato</h1>
                <ul className='font-2-m'>
                    <li><a href="tel:+5511999999999">+55 11 99999-9999</a></li>
                    <li><a href="mailto:contato@singep.com">contato@singep.com</a></li>
                    <li>R. Ali em São Paulo, 00 - Centro</li>
                    <li>São Paulo - SP</li>
                </ul><br/>

                <div className='footer-redes'>
                    <a href="#">
                        <img src={images.instagram} alt="instragam" />
                    </a>

                    <a href="#">
                        <img src={images.facebook} alt="facebook" />
                    </a>

                    <a href="#">
                        <img src={images.youtube} alt="youtube" />
                    </a>
                </div>

            </div>

            <div className='footer-informacoes'>
                    <h1>Informações</h1>
                    <nav>
                        <ul className='font-1-m'>
                            <li><a href="#">Entrar</a></li>
                            <li><a href="#">Registrar</a></li>
                        </ul>
                    </nav>
                </div>

                <h1>Singep © Todos direitos reservados.</h1>
        </div>
      </footer>
    </div>
  );
};
