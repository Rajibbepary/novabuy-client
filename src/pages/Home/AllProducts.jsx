import { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import ProductsCard from "./ProductsCard";


const AllProducts = () => {
    const [products] = useProduct();
    const [layout, setLayout] = useState("xl:grid-cols-5");
    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("alphabetical");
    const [camps, setCamps] = useState([]);
  
  useEffect(() => {
    fetch(`https://medical-camp-server-iota.vercel.app/camp?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCamps(data);
      });
  }, [search]);

 
 
//   const handleLayoutToggle = () => {
//     setLayout(layout === "xl:grid-cols-5" ? "lg:grid-cols-4" : "xl:grid-cols-5");
//   };
//grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
  const handleLayoutToggle = () => {
  setLayout(prevLayout =>
    prevLayout === "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "
      ? " md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "
  );
};



  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  
//   //const filteredCamps = camps
//     .filter((camp) =>
//       camp.name.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === "alphabetical") {
//         return a.name.localeCompare(b.name);
//       } else if (sortOption === "mostRegistered") {
//         return b.participants - a.participants;
//       } else if (sortOption === "fees") {
//         return a.fees - b.fees;
//       } else {
//         return 0;
//       }
//     });



    return (
        <div className="flex flex-col items-center pt-14 w-11/12 mx-auto">
      <p className="text-2xl font-medium text-left w-full">All products</p>
        <div className="flex w-full flex-col lg:flex-row gap-3 justify-between mt-4 mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded w-full max-w-sm mr-4"
            value={search}
            onChange={handleSearch}
          />
          <select
            className="border p-2 rounded"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="alphabetical">Laptop</option>
            <option value="mostRegistered">Mobile</option>
            <option value="fees">Smart Watch</option>
          </select>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded ml-4"
            onClick={handleLayoutToggle}
          >
            Change Layout
          </button>
        </div>
      <div className={`grid flex-col items-center gap-6 mt-6 pb-14 w-full ${layout}`}>
        {products.map((product, index) => <ProductsCard key={index} product={product} />)}
      </div>
      
    </div>
    );
};

export default AllProducts;