import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export interface IOwner {
  owner: {
    name: string;
    img: string;
    title: string;
    socials?: {
      github?: string;
      linkedin?: string;
      instagram?: string;
    };
  };
  status: "busy" | "available" | "offline";
}

export default function PortfolioOwner(props: IOwner) {
  const { owner, status } = props;
  return (
    <div className="portfolio-owner">
      <div className="owner-profile">
        <div className="owner-img">
          <img src={owner.img} alt={owner.name} />
          <div
            className={`status ${
              status == "available"
                ? "status__available"
                : status == "busy"
                ? "status__busy"
                : status == "offline"
                ? "status__offline"
                : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="owner-info">
        <h2 className="owner-name">{owner.name}</h2>
        <h4 className="owner-title">{owner.title}</h4>
        <div className="owner-socials">
          <a href={owner?.socials?.github} target="_blank" rel="noreferrer">
            <FaGithubSquare />
          </a>
          <a href={owner?.socials?.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href={owner?.socials?.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
