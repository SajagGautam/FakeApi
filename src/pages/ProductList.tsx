import React, { useState } from "react";
import { useGetProductsQuery, useGetCategoriesQuery } from "../api/productApi";

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const { data: categories } = useGetCategoriesQuery(null);
  const { data: products, error, isLoading } = useGetProductsQuery(selectedCategory ?? undefined);

  if (isLoading) return <p className="text-center mt-6">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Failed to fetch products.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6"> Products Haru From Fake Plazi</h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === null ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories?.map((cat: any) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat.id ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg truncate">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.category?.name}</p>
              <p className="text-green-600 font-bold mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
