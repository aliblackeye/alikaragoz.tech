"use client";

// Import React
import { useState, useEffect } from "react";

// Import Components
import PortfolioOwner, { IOwner } from "@/components/_home-page/PortfolioOwner";
import ProjectCard from "@/components/_home-page/ProjectCard";

interface IProject {
  name: string;
  path: string;
}

export default function Home() {
  const [ownerStatus, setOwnerStatus] = useState<
    "offline" | "available" | "busy"
  >("offline");

  const owner: IOwner = {
    owner: {
      name: "Ali Karagöz",
      img: "https://avatars.githubusercontent.com/u/80913896?v=4",
      title: "Front End Developer",
      socials: {
        github: "https://github.com/aliblackeye",
        instagram: "https://instagram.com/aliblackeye",
        linkedin: "https://linkedin.com/in/aliblackeye",
      },
    },
    status: ownerStatus,
  };

  const newbies: IProject[] = [
    {
      name: "Results Summary",
      path: "newbie/results-summary",
    },
    {
      name: "Product Preview Card",
      path: "newbie/product-preview-card",
    },
    {
      name: "NFT Card",
      path: "newbie/nft-card",
    },
  ];

  const juniors: IProject[] = [];

  // Eğer saat türkiye saati ile 9.00-18.00 arasında ise meşgul, 18.00'dan sonra ise müsait, 00.00'dan sonra çevrimdışı gözükmeli
  useEffect(() => {
    const currentDate = new Date();
    const utcOffset = currentDate.getTimezoneOffset() * 60 * 1000;
    const localDate = new Date(currentDate.getTime() - utcOffset);
    const localHours = localDate.getHours();

    if (localHours >= 9 && localHours < 18) {
      setOwnerStatus("busy");
    } else if (localHours >= 18 && localHours < 24) {
      setOwnerStatus("available");
    } else {
      setOwnerStatus("offline");
    }
  }, []);

  return (
    <div className="home-page">
      <PortfolioOwner owner={owner?.owner} status={ownerStatus} />
      <div className="projects-wrapper">
        <ProjectCard items={newbies} title="Newbie" variant="primary" />
        <ProjectCard items={juniors} title="Junior" variant="secondary" />
      </div>
    </div>
  );
}
