interface Project {
  name: string;
  path: string;
}

export default function Home() {
  const newbies: Project[] = [
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

  const juniors: Project[] = [];

  return (
    <div className="projects-wrapper">
      <div className="project-container newbie-projects">
        <h1>Newbie Projects</h1>
        <ul className="project-list">
          {newbies.map((newbies, key) => (
            <li key={key}>
              <a href={newbies.path}>
                <button className="btn btn-primary">{newbies.name}</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="project-container junior-projects">
        <h1>Junior Projects</h1>
        <ul className="project-list">
          {juniors.map((juniors, key) => (
            <li key={key}>
              <a href={juniors.path}>
                <button className="btn btn-success">{juniors.name}</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
