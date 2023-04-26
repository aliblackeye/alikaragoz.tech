"use client";

// Import React
import { useState, useEffect } from "react";

// Import Components
import PortfolioOwner, { IOwner } from "@/components/_home/PortfolioOwner";
import ProjectCard from "@/components/_home/ProjectCard";

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

  const intern: IProject[] = [
    {
      name: "Results Summary",
      path: "newbie/results-summary",
    },
    {
      name: "Product Preview",
      path: "newbie/product-preview-card",
    },
    {
      name: "NFT Card",
      path: "newbie/nft-card",
    },
    {
      name: "Interactive Rating",
      path: "newbie/interactive-rating",
    },
  ];

  const junior: IProject[] = [];

  const mid: IProject[] = [];

  const lead: IProject[] = [];

  const senior: IProject[] = [];

  // Eğer saat türkiye saati ile 9.00-18.00 arasında ise meşgul, 18.00'dan sonra ise müsait, 00.00'dan sonra çevrimdışı gözükmeli
  useEffect(() => {
    const startHour = 9;
    const endHour = 18;

    const date = new Date();
    const hour = date.getHours();

    if (hour >= startHour && hour < endHour) {
      setOwnerStatus("busy");
    } else if (hour >= endHour && hour < 24) {
      setOwnerStatus("available");
    } else {
      setOwnerStatus("offline");
    }
  }, []);

  return (
    <div className="home-page">
      <PortfolioOwner owner={owner?.owner} status={ownerStatus} />
      <div className="projects-wrapper">
        <ProjectCard items={intern} title="Intern" variant="secondary" />
        <ProjectCard items={junior} title="Junior" variant="success" />
        <ProjectCard items={mid} title="Mid" variant="info" />
        <ProjectCard items={lead} title="Lead" variant="warning" />
        <ProjectCard items={senior} title="Senior" variant="danger" />
      </div>
    </div>
  );
}
