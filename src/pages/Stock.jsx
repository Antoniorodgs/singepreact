import React from 'react';
import "../App.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Stock = () => {

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

    console.log("DATA: ", data.data);
    const productsData = data.data;
    productsData.map((prod) => {
        console.log(prod);
    })
    let i = 0;
    return (
        <div>
            
            <h2>Estoque dos Produtos</h2>< br/><hr/><br />
            <ul className='ProdList'>
                <li className='impar'>
                    <p>Produto</p>
                    <p>Lote</p>
                    <p>Validade</p>
                    <p>Total</p>
                </li>
                {
                   productsData.map((prod) => {
                    i++;
                    if(i % 2 == 0) {
                        return <li className='par'>
                            <p>{prod.name}</p>
                            <p>{prod.lote}</p>
                            <p>{prod.expiry}</p>
                            <p>{prod.totalun}un</p>
                        </li>
                    } else {
                        return <li className='impar'>
                            <p>{prod.name}</p>
                            <p>{prod.lote}</p>
                            <p>{prod.expiry}</p>
                            <p>{prod.totalun}un</p>
                        </li>
                    }
                    
                        
                })
                }
            </ul>
            
        </div>
      );
};
