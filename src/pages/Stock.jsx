import React from 'react';
import "../App.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Stock = () => {

    document.documentElement.requestFullscreen();

    const [data, setData] = useState({"data": []});

        useEffect(() => {
            async function fetchData() {
                try {
                    const resp = await axios.get('http://localhost:3033/singep/products/product/11959050868');
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
            <table className='ProdList'>
                <tr className='initial'>
                    <th>Produto</th>
                    <th>Lote</th>
                    <th>Validade</th>
                    <th>Total(un.)</th>
                </tr>
                {
                   productsData.map((prod) => {
                    i++;
                    if(i % 2 == 0) {
                        return <tr className='par'>
                            <td>{prod.name}</td>
                            <td>{prod.lote}</td>
                            <td className='val'>{prod.expiry}</td>
                            <td>{prod.totalun}</td>
                        </tr>
                    } else {
                        return <tr className='impar'>
                            <td>{prod.name}</td>
                            <td>{prod.lote}</td>
                            <td className='val'>{prod.expiry}</td>
                            <td>{prod.totalun}</td>
                        </tr>
                    }
                    
                        
                })
                }
            </table>
            
        </div>
      );
};
