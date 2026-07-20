import React, { useEffect, useState } from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { products } = useCart();
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("All");

  const filterProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    const matched = select === "All" || product.category === select;
    return matchesSearch && matched;
  });

  return (
    <>
      <SearchFilter search={search} setSearch={setSearch} />
      <div className="container mx-auto px-4 md:px-8 pt-3">
        <CategoryFilter select={select} setSelect={setSelect} />
        <h2 className="text-2xl font-extrabold mx-auto pt-4">
          Featured Gear ({products.length} Items)
        </h2>
        <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {filterProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
