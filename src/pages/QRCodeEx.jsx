import React from "react";

import QRCodeWebcam from "./QRCodeWebcam";
const QRCodeEx = () => {
    document.documentElement.requestFullscreen();

  return (
    <div className="container mx-auto mt-2">
      
      <div className="row">
        <QRCodeWebcam />
      </div>
    </div>
  );
};

export default QRCodeEx;
