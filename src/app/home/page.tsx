"use client";

// Import React
import { useState, useEffect } from "react";

// Import Partials
import PortfolioOwner, { IOwner } from "./_partials/PortfolioOwner";
import ProjectCard from "./_partials/ProjectCard";

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
      name: "Workit Landing Page",
      path: "intern/workit-landing-page",
    },
    {
      name: "Results Summary",
      path: "intern/results-summary",
    },
    {
      name: "Product Preview",
      path: "intern/product-preview-card",
    },
    {
      name: "NFT Card",
      path: "intern/nft-card",
    },
    {
      name: "Interactive Rating",
      path: "intern/interactive-rating",
    },
    {
      name: "QR Code",
      path: "intern/qr-code",
    },
    {
      name: "Order Summary",
      path: "intern/order-summary",
    },
    {
      name: "Stats Preview",
      path: "intern/stats-preview",
    },
    {
      name: "3 Column Preview",
      path: "intern/three-column-card",
    },
    {
      name: "Profile Card",
      path: "intern/profile-card",
    },
    {
      name: "FAQ Accordion",
      path: "intern/faq-accordion",
    },
    {
      name: "Social Proof",
      path: "intern/social-proof",
    },
    {
      name: "Article Preview",
      path: "intern/article-preview",
    },
    {
      name: "Four Cards",
      path: "intern/four-cards",
    },
    {
      name: "Base Apparel",
      path: "intern/base-apparel",
    },

    {
      name: "Sign Up Form",
      path: "intern/sign-up-form",
    },
    {
      name: "Single Price Grid",
      path: "intern/single-price-grid",
    },
    {
      name: "Ping Single Column",
      path: "intern/ping-single-column",
    },
    {
      name: "Huddle Landing",
      path: "intern/huddle-landing",
    },
  ];

  const junior: IProject[] = [
    {
      name: "Oceanland Clone",
      path: "https://aliblackeye-oceanland-clone.netlify.app/",
    },
    { name: "Age Calculator", path: "junior/age-calculator" },
    { name: "News Page", path: "junior/news-page" },
    { name: "Turnstile", path: "junior/turnstile" },
    { name: "hCaptcha", path: "junior/hCaptcha" },
    { name: "Newsletter Sign Up", path: "junior/newsletter-sign-up" },
  ];

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
      <div className="centered-page">
        <PortfolioOwner
          owner={owner?.owner}
          status={ownerStatus}
        />
        <div className="projects-wrapper">
          <ProjectCard
            items={intern}
            title="Intern"
            variant="purple"
          />
          <ProjectCard
            items={junior}
            title="Junior"
            variant="success"
          />
          <ProjectCard
            items={mid}
            title="Mid"
            variant="info"
          />
          <ProjectCard
            items={lead}
            title="Lead"
            variant="warning"
          />
          <ProjectCard
            items={senior}
            title="Senior"
            variant="danger"
          />
        </div>
      </div>
    </div>
  );
}
