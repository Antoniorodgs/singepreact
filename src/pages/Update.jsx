import React from 'react';

export const Update = () => {
    return (
        
        <div className='attproduto'>
            <h2>Atualizar Preço</h2><br /><hr />
            <section className='containerattproduto'>
                <form action="#" className="formatt"><br></br>
            <div className='input-boxatt'>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Nome do Produto'/>

            </div>

            <div className='input-boxatt'>
                <label htmlFor="">Lote</label>
                <input type="text" placeholder='Numero do Lote'/>
                
            </div>

            <div className='input-boxatt'>
                <label htmlFor="">Novo Preço</label>
                <input type="text" placeholder='R$'/>
                
            </div>
            </form>

            <div className='columbtn'>
            <button className='btncancel'>Cancelar</button>
            <button className='btnreg'>Atualizar</button>
            </div>

            </section>
        </div>
      );
};
