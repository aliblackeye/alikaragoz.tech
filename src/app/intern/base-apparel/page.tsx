import Image from "next/image";
import img from "@images/model.jpeg";
import { BiChevronRight } from "react-icons/bi";
export default function BaseApparel() {
  return (
    <div className="centered-page">
      <div className="base-apparel">
      <div className="left">
        <div className="brand">
          <div className="circle"></div>
          <h6 className="brand-name">BASE APPAREL</h6>
        </div>
        <div className="bottom">
          <h1 className="title colored">{`WE'RE`}</h1>
          <h1 className="title">{`COMING SOON`}</h1>
          <p className="text">{`Hello fellow shappers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.`}</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Email Address" />
            <button>
              <BiChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="model">
          <img src={img} alt="model" />
        </div>
      </div>
    </div>
    </div>
  );
}
