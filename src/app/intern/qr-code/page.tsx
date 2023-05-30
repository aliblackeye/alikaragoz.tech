// Import Next
import Image from "next/image";


export default function QrCode() {
  return (
   <div className="centered-page">
     <div className="qr-menu">
      <div className="qr-img">
        <img src={"/assets/images/qrcode.png"} alt="qr" />
      </div>
      <div className="qr-bottom">
        <p className="qr-title">
          {`Improve your front-end skills by building projects`}
        </p>
        <p className="qr-desc">
          {`Scan the QR code to visit Ali Karagoz's github account's repositories
          for giving stars.`}
        </p>
      </div>
    </div>
   </div>
  );
}
