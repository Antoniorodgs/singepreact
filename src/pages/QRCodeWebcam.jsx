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
    <div className="card col-sm-4">
      <div>
        <h2>Vender</h2>
        <br />
        <hr />
        <br />

        <div className="divarea">
          <div>
            <div className="topodescricao">
              <div><h3>Produto</h3></div>
              <div><h3>Quantidade</h3></div>
              <div><h3>Preço</h3></div>
            </div>

            <br />
            <div className="exibirprodutos"></div>

            <br />
            <div className="totalproduto">
              <div className="valortotal">
                <h3>R$:</h3>
              </div>
            </div>
          </div>

          <div className="topodireita">
            <div>
            <div className="card-header m-1 rounded text-center">
              <h3>Webcam Image</h3>
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
            <div className="card-footer rounded mb-1">
              <h6>WebCam Result: {webcamResult}</h6>
            </div>
            </div>

            <div className='btncancel-2'>
            <h3>Cancelar item</h3>
            </div>

            <div className='btnvenda'>
            <h3>Finalizar venda</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeWebcam;
