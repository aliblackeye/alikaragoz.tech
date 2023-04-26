// Import Next
import Image from "next/image";

import img from "@/assets/images/qrcode.png";

export default function QrCode() {
  return (
    <div className="qr-menu">
      <div className="qr-img">
        <Image src={img} alt="qr" />
      </div>
    </div>
  );
}
