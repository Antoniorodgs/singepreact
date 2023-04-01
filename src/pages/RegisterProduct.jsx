import React from 'react';

export const RegisterProduct = () => {
    return (

        <div className='registrarproduto'>
        <section className='containerregistrarproduto'>
        <header>Registrar Produto</header>
        <form action="#" className="formreg"><br></br>
            <div className='input-boxreg'>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Nome do Produto'/>

            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Preço</label>
                <input type="text" placeholder='R$'/>
                
            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Lote</label>
                <input type="text" placeholder='Lote do Produto'/>
                
            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Data de validade</label>
                <input type="date" placeholder='Data da Validade'/>
                
            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Total de unidade</label>
                <input type="text" placeholder='Total Unitario'/>
                
            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Total em KG ou Quilogramas</label>
                <input type="text" placeholder='Total em KG/G'/>
                
            </div>
        </form>

        <div className='columbtn'>
        <button className='btncancel'>Cancelar</button>
        <button className='btnreg'>Registrar</button>
        </div>
        </section>
    </div>
      );
};
