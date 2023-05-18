import { useState } from 'react';
import sound from '../static/bipSound.mp3';
import QrReader from 'react-qr-reader';
import axios from "axios";

let song = new Audio(sound);

const itens = [];

const QRCodeWebcam = () => {
  const [webcamResult, setWebcamResult] = useState();
  const [buyingItens, setBuyingItens] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const webcamError = (error) => {
    if (error) {
      console.log("Error: ", error);
    }
  };


  const anotherOne = async (result) => {
    // console.log(result);
    
    let aux = result.split("/");
    const resp = await axios.get(`http://localhost:3033/singep/product/${aux[1]}/${aux[2]}`);
    console.log(resp);
    let price = Number(resp.data[0].price);
    aux.push("r$"+price);
    itens.push(aux);
    let newValue = Number(totalPrice) + price;
    setTotalPrice(newValue);
    console.log("Itens: ", itens);
    setBuyingItens(itens);
    console.log(itens);
  }
  let i = 0;
  
  const webcamScan = async(result) => {
    
    if (result) {
      song.play();
      setWebcamResult(result)
      await anotherOne(result);
      
    }

  };

  return (

    <div className='attvenda'>
      {/* <h2>Caixa</h2><br /><hr /> */}
    <section className='containervenda'>
      
      <div className='divcaixa'> 
        <div className='boxesquerda'>
        <div className="topodescricao">
              <div><h5>Produto</h5></div>
              <div><h5>Quantidade</h5></div>
              <div><h5>Preço</h5></div>
            </div>

            <br />

            <div className="exibirprodutos">
              {/* <ul> */}
              {
                buyingItens.map((item, index) => {
                  if(true /*index%2 === 0*/){
                    return <><tr className='par'>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[4]}</td>
                        </tr><hr /></>
                  } else {
                     
                  }})
              }
              {/* </ul> */}
            </div>

            <br />

            <div className="totalproduto">

              <div className='cancelvenda'>
                <h5>CANCELAR VENDA</h5>
              </div>

              <div className="valortotal">
                <h4>R$:{(totalPrice.toFixed(2))}</h4>
              </div>
            </div>
        </div>

        <div className='boxdireita'>
            <div className='topodireita'>
            <div>
            <div className="card-header m-1 rounded text-center">
            
            </div>
            <div className="card-body text-center imageQrCamera">
              <QrReader
                delay={2000} 
                onError={webcamError}
                onScan={webcamScan}
                legacyMode={false}
                facingMode={'environment'}
              />
            </div>
            {/* <div className="card-footer rounded mb-1">
              <h6>WebCam Result: {webcamResult}</h6>
            </div> */}
            </div>

            <div className='btndinheiro'>
              DINHEIRO
            </div>

            <p className='pmenudireita'>SUB. TOTAL:</p>
            <div className='totalentrada'>
            </div>

            <p className='pmenudireita'>TROCO:</p>
            <div className='saldotroco'>
            </div>

            <div className='btnlimpa'>
            <h5>CANCELAR ITEM</h5>
            </div>

            <div className='btnvenda'>
            <h5>FINALIZAR VENDA</h5>
            </div>

            </div>

        </div>

      </div>

    </section>
  </div>

  );
};

export default QRCodeWebcam;
