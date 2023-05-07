"use client";
import Link from "next/link";
import { useState } from "react";

export default function NewsPage() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "New", path: "/" },
    { title: "Popular", path: "/" },
    { title: "Trending", path: "/" },
    { title: "Categories", path: "/" },
  ];

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <div className="news-page">
      <div className="container news-page-container">
        <header className="header">
          <div className="header-container">
            <h1 className="brand">W.</h1>

            <nav className={`navbar ${isMenuOpened && "show-hamburger-menu"}`}>
              {navLinks.map((item, key) => (
                <Link key={key} href={item.path}>
                  {item.title}
                </Link>
              ))}
            </nav>

            <button className={`hamburger-menu-btn`} onClick={handleMenu}>
              {isMenuOpened ? ("X") : ("☰")}
            </button>
          </div>
        </header>
        <main className="news-main">
          <div className="news-main-container">
            <div className="news-main-left">
              <div className="news-main-left-top">
                <img
                  src={
                    "https://images.pexels.com/photos/1148521/pexels-photo-1148521.jpeg"
                  }
                  alt="bg"
                />
              </div>
              <div className="news-main-left-bottom">
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="main-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis nesciunt rem accusamus eum distinctio dolores
                    mollitia quo quaerat ducimus placeat?
                  </p>
                  <button className="read-more-btn btn">READ MORE</button>
                </div>
              </div>
            </div>
            <div className="news-main-right">
              <div className="last-news">
                <h1>New</h1>
                <div className="last-news-item">
                  <h6 className="last-news-item-title">Last News Title</h6>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="last-news-item">
                  <h6 className="last-news-item-title">Last News Title</h6>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="last-news-item">
                  <h6 className="last-news-item-title">Last News Title</h6>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="news-list">
          <div className="news-list-container">
            <div className="news-item">
              <div className="news-item-left">
                <img src={"https://picsum.photos/200"} alt="news" />
              </div>
              <div className="news-item-right">
                <div className="news-number">01</div>
                <h4>Reviving Retro PCs</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="news-item">
              <div className="news-item-left">
                <img src={"https://picsum.photos/200"} alt="news" />
              </div>
              <div className="news-item-right">
                <div className="news-number">02</div>
                <h4>Reviving Retro PCs</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="news-item">
              <div className="news-item-left">
                <img src={"https://picsum.photos/200"} alt="news" />
              </div>
              <div className="news-item-right">
                <div className="news-number">03</div>
                <h4>Reviving Retro PCs</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
