import { FaEthereum } from "react-icons/fa";

import { Metadata } from "next";

const metadata: Metadata = {
  title: "Ali Karagöz | NFT Card",
  description: "NFT Card Project",
};

export default function NftCard() {
  return (
    <div className="nft-card">
      <div className="nft-card__top">
        <div className="nft-image">
          <img
            src="https://ikmagazin.com/wp-content/uploads/2021/10/Basliksiz-2-1132x670-1.png"
            alt="nft"
          />
        </div>
      </div>
      <div className="nft-card__bottom">
        <div className="nft-info">
          <h1 className="nft-name">Blackeye</h1>
          <p className="nft-description">
            Our Blackeye collection promotes balance and calm.
          </p>
          <div className="nft-info__bottom">
            <div className="nft-price">
              <FaEthereum />
              <span>0.041 ETH</span>
            </div>
            <div className="nft-due-date">
              <span>3 days left</span>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="nft-owner">
          <div className="nft-owner__img">
            <img
              src="https://avatars.githubusercontent.com/u/80913896?v=4"
              alt="nft"
            />
          </div>
          <span>
            Creation of <span className="owner-name">Ali Karagöz</span>
          </span>
        </div>
      </div>
    </div>
  );
}
