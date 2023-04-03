import React from 'react';

export const Delete = () => {
    return (
        <div className='attproduto'>
            <h2>Deletar Produto</h2><br /><hr />
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

            </form>

            <div className='columbtn'>
            <button className='btncancel'>Cancelar</button>
            <button className='btndelete'>Deletar Produto</button>
            </div>

            </section>
        </div>
      );
};
