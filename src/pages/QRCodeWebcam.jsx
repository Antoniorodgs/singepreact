import { useState } from 'react';
import sound from '../static/bipSound.mp3';

let song = new Audio(sound);

const QrReader = require('react-qr-reader');
const QRCodeWebcam = () => {
  document.documentElement.requestFullscreen();
  const [webcamResult, setWebcamResult] = useState();
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
    }
  };
  return (

    <div className='attvenda'>
      <h2>Caixa</h2><br /><hr />
    <section className='containervenda'>
      
      <div className='divcaixa'> 
        <div className='boxesquerda'>
        <div className="topodescricao">
              <div><h4>Produto</h4></div>
              <div><h4>Quantidade</h4></div>
              <div><h4>Preço</h4></div>
            </div>

            <br />

            <div className="exibirprodutos"></div>

            <br />

            <div className="totalproduto">

              <div className='cancelvenda'>
                <h4>CANCELAR VENDA</h4>
              </div>

              <div className="valortotal">
                <h4>R$:</h4>
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
                delay={3000}
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
            <h4>CANCELAR ITEM</h4>
            </div>

            <div className='btnvenda'>
            <h4>FINALIZAR VENDA</h4>
            </div>

            </div>

        </div>

      </div>

    </section>
  </div>

  );
};

export default QRCodeWebcam;
