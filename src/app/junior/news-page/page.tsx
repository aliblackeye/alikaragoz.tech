import Link from "next/link";

export default function NewsPage() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "New", path: "/" },
    { title: "Popular", path: "/" },
    { title: "Trending", path: "/" },
    { title: "Categories", path: "/" },
  ];

  return (
    <div className="news-page">
      <header className="header">
        <h1 className="brand">W.</h1>
        <nav className="navbar">
          {navLinks.map((item, key) => (
            <Link key={key} href={item.path}>
              {item.title}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
