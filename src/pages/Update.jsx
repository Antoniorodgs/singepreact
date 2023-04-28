import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Update = () => {

    //document.documentElement.requestFullscreen();

    const [name, setName] = useState('name');
    const [lote, setLote] = useState('lote');
    const [newPrice, setNewPrice] = useState('');

    const [data, setData] = useState({"data": []});

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await axios.get('http://localhost:3033/singep/products/product/11959050868');
                console.log(resp);
                setData(resp);
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const productsData = data.data;

    const cancelBottom = () => {

        setNewPrice('');
        setName('');
        setLote('');
        
    }

    const handlePrice = (e) => {

        setNewPrice(e.target.value);
        console.log(newPrice);
    }

    const handleLote = (e) => {

        setLote(e.target.value);
        console.log(lote);

    }

    const handleName = (e) => {

        setName(e.target.value);
        console.log(name);

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        let whatsappOwner = "11959050868";
        let objJson = {whatsappOwner, name, lote, newPrice};
        console.log("AQUI: ", typeof name, newPrice);

        try {
      
            const resp = await axios.post('http://localhost:3033/singep/product/update', objJson, {
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
        
        <div className='attproduto'>
            <h2>Atualizar Preço</h2><br /><hr />
            <section className='containerattproduto'>
                <form action="#" className="formatt" id="updateProduct" onSubmit={handleSubmit}><br></br>
            <div className='input-boxatt'>
                <label htmlFor="">Nome</label>
                <div className='columnassunto'>
                    <div className='selectboxassunto'> 
                    <select value={name} onChange={handleName}>
                        <option>Produto</option>
                        {
                        productsData.map((prod) => {
                            let name = prod.name;
                            return(
                                <option>{name}</option>
                            )
                            
                        })}
                        </select>
                    </div>
                </div>

            </div>

            <div className='input-boxatt'>
                <label htmlFor="">Lote</label>
                <div className='columnassunto'>
                    <div className='selectboxassunto'> 
                    <select value={lote} onChange={handleLote}>
                        <option>Lote</option>
                        {
    
                        productsData.map((prod) => {
                            let lote = prod.lote;
                            return(
                                <option>{lote}</option>
                            )
                        })}
                        
                    </select>
                    </div>
                </div>
                
            </div>

            <div className='input-boxatt'>
                <label htmlFor="">Novo Preço</label>
                <input value={newPrice} type="text" placeholder='R$' onChange={handlePrice}/>
                
            </div>
            </form>

            <div className='columbtn'>
            <button className='btncancel' onClick={cancelBottom}>Cancelar</button>
            <button onClick={cancelBottom} className='btnreg' type="submit" form="updateProduct">Atualizar</button>
            </div>

            </section>
        </div>
      );
};
