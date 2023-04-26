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
            <h1 class="font-1-xxl">
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
        <h2 className="containerhome font-1-xxl2">Nosso time e composto<span className="cor-p1">.</span>
        </h2>
        <ul className="imagenstratamento">
          <li className='imagemEquipe'>
            <a href="">
              <img src={images.amaro} alt="Amaro" />
              <h3 className="font-1-xl">Amaro</h3>
              <span className="font-2-m">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                dolorem autem expedita quasi qui vitae, eaque pariatur
                exercitationem quidem at?
              </span>
            </a>
          </li>

          <li className='imagemEquipe'>
            <a href="">
              <img src={images.antonio} alt="Antonio" />
              <h3 className="font-1-xl">Antonio</h3>
              <span className="font-2-m">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                dolorem autem expedita quasi qui vitae, eaque pariatur
                exercitationem quidem at?
              </span>
            </a>
          </li>

          <li className='imagemEquipe'>
            <a href="">
              <img src={images.gabriel} alt="Gabriel" />
              <h3 className="font-1-xl">Gabriel</h3>
              <span className="font-2-m">
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
                <h3 className='font-2-1-b'>Contato</h3>
                <ul className='font-2-m'>
                    <li><a href="tel:+5511999999999">+55 11 99999-9999</a></li>
                    <li><a href="mailto:contato@singep.com">contato@singep.com</a></li>
                    <li>R. Ali em São Paulo, 00 - Centro</li>
                    <li>São Paulo - SP</li>
                </ul>

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
                    <h3 className='font-2-1-b'>Informações</h3>
                    <nav>
                        <ul className='font-1-m'>
                            <li><a href="#">Entrar</a></li>
                            <li><a href="#">Registrar</a></li>
                        </ul>
                    </nav>
                </div>

                <p className='footer-copy font-2-m'>Singep © Alguns direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
