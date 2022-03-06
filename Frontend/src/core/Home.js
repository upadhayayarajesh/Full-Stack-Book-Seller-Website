import React, { useState, useEffect } from "react";
import { getProducts } from "./apiCore";
import Layout from "./Layout";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title=" Home Page" description="Node React E-commerce App">
      <Search/>
      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
      {productByArrival.map((product, i) => (
         <div key={i} className="col-4 mb-3" >
            <Card product={product} />
         </div>
        ))}
      </div>
      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {productByArrival.map((product, i) => (
          <div key={i} className="col-4 mb-3" >
          <Card product={product} />
       </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
