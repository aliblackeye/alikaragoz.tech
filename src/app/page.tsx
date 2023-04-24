
export default function Home() {
  return (
    <div className="projects-wrapper">
      <div className="project-container newbie-projects">
        <h1>Newbie Projects</h1>
        <ul className="project-list">
          <li>
            <a href="newbie/results-summary">
              <button className="btn btn-primary">Results Summary</button>
            </a>
          </li>
          <li>
            <a href="newbie/product-preview-card">
              <button className="btn btn-primary">Product Preview Card</button>
            </a>
          </li>
        </ul>
      </div>
      <div className="project-container junior-projects">
        <h1>Junior Projects</h1>
        <ul className="project-list">
          <li></li>
        </ul>
      </div>
    </div>
  );
}
