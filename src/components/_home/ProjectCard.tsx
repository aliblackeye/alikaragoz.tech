interface IProjectCard {
  title: string;
  items: {
    name: string;
    path: string;
  }[];
  variant: "primary" | "success" | "danger" | "info" | "secondary" | "warning";
}

export default function ProjectCard(props: IProjectCard) {
  const { items, variant, title } = props;

  return (
    <>
      {items.length > 0 && (
        <div className={`project-container`}>
          <h1>{title}</h1>
          <ul className="project-list">
            {items.map((items, key) => (
              <li key={key}>
                <a href={items.path}>
                  <button className={`btn btn-${variant}`}>{items.name}</button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
