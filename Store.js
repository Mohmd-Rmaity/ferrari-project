import { useState } from "react";

const products = [
  { name: 'Leclerc Cap', image: '/Images/lec cap red.jfif', price: '$50.00' },
  { name: 'Hamilton White Cap', image: '/Images/ham cap white.webp', price: '$56.00' },
  { name: 'Ferrari Blue Cap', image: '/Images/blue cap.jfif', price: '$45.00' },
  { name: 'Ferrari F1 White T-Shirt', image: '/Images/f1 shirt white.jfif', price: '$117.00' },
  { name: 'Ferrari F1 Black T-Shirt', image: '/Images/f1 shirt black.webp', price: '$111.00' },
  { name: 'Ferrari F1 T-Shirt', image: '/Images/f1 shirt.avif', price: '$125.00' },
];

function Store() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <div className="container">
        <h1>Ferrari Store</h1>
      </div>

       <div className="store-search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section className="grid">
        {products.map((p) => (
          <div key={p.name} className="card">
            <img className="imgg" src={p.image} alt={p.name} />
            <p className="card-body">{p.name}</p>
            <button className="btn">{p.price}</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Store;