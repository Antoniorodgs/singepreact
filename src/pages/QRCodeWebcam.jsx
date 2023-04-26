import { useState } from "react";
import sound from "../static/bipSound.mp3";

let song = new Audio(sound);

const QrReader = require("react-qr-reader");
const QRCodeWebcam = () => {
  document.documentElement.requestFullscreen();
  const [webcamResult, setWebcamResult] = useState();
  const webcamError = (error) => {
    if (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
      
  }, 5000)

  const webcamScan = (result) => {
    if (result) { 
      song.play();
      setWebcamResult(result);
    }
    
  };
  return (
    <div className="card col-sm-4">
      <div className="card-header m-1 rounded text-center">
        <h3>Webcam Image</h3>
      </div>
      <div className="card-body text-center imageQrCamera">
        <QrReader
          delay={3000}
          onError={webcamError}
          onScan={webcamScan}
          legacyMode={false}
          facingMode={"environment"}
        />
      </div>
      <div className="card-footer rounded mb-1">
        <h6>WebCam Result: {webcamResult}</h6>
      </div>
    </div>
  );
};

export default QRCodeWebcam;
