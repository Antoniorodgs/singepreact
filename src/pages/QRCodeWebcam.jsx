import { useState } from 'react';
import sound from '../static/bipSound.mp3';
import QrReader from 'react-qr-reader';

let song = new Audio(sound);

const itens = [];

const QRCodeWebcam = () => {
  const [webcamResult, setWebcamResult] = useState();
  const [buyingItens, setBuyingItens] = useState([]);
  const webcamError = (error) => {
    if (error) {
      console.log(error);
    }
  };

  setTimeout(() => {}, 5000);

  const webcamScan = (result) => {
    if (result) {
      song.play();
      setWebcamResult(result);
      console.log(result);
      itens.push(result);
      console.log("Itens: ", itens);
      setBuyingItens(itens);
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
              {
                buyingItens.map(item => {
                  return <p>{item}</p>
                })
              }
            </div>

            <br />

            <div className="totalproduto">

              <div className='cancelvenda'>
                <h5>CANCELAR VENDA</h5>
              </div>

              <div className="valortotal">
                <h5>R$:</h5>
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
                videoWidth={150}
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
