import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';


export const Update = () => {

    const [data, setData] = useState({"data": []});

        useEffect(() => {
            async function fetchData() {
                try {
                    const resp = await axios.get('http://localhost:3033/singep/product/products/11959050868');
                    setData(resp);
                } catch(err){
                    console.log(err);
                }
            }
            fetchData();
        }, []);

    const lotes = [];
    const prods = [];

    console.log("DATA: ", data.data);
    const productsData = data.data;
    productsData.map((prod) => {
        console.log(prod);
    })

    return (
        
        <div className='attproduto'>
            <h2>Atualizar Preço</h2><br /><hr />
            <section className='containerattproduto'>
                <form action="#" className="formatt"><br></br>
            <div className='input-boxatt'>
                <label htmlFor="">Nome</label>
                <div className='columnassunto'>
                    <div className='selectboxassunto'> 
                    <select>{
                        productsData.map((prod) => {
                            console.log(prod.name);
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
                    <select>{
    
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
