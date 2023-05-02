export default function ProductPreviewCard() {
  return (
    <div className="centered-page">
      <div className="product-preview-card">
      <div className="product-preview-card__left">
        <div className="product-img">
          <img
            src="http://3.bp.blogspot.com/-P8mloDIxlnQ/UqMOwgrxlDI/AAAAAAAAMLM/9SkFxIcyO_g/s1600/coco+by+chanel+eau+de+parfum+original+80s+perfume+fragrance+perfumeshrine.com.jpg"
            alt="Parfume"
          />
        </div>
      </div>
      <div className="product-preview-card__right">
        <h4 className="product-type">PERFUME</h4>
        <h3 className="product-name">Coco Chanel Eau De Parfum</h3>
        <p className="product-description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="product-price">
          <span className="product-price__new">$149.99</span>
          <span className="product-price__old">$169.99</span>
        </div>
        <button className="add-to-cart">
          <span className="add-to-cart__icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="add-to-cart__text">Add to Cart</span>
        </button>
      </div>
    </div>
    </div>
  );
}
