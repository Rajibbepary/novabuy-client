import useProduct from "../../hooks/useProduct";
import ProductsCard from "./ProductsCard";


const AllProducts = () => {
      const [products] = useProduct();
    return (
        <div className="flex flex-col items-center pt-14 w-11/12 mx-auto">
      <p className="text-2xl font-medium text-left w-full">All products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {products.map((product, index) => <ProductsCard key={index} product={product} />)}
      </div>
      
    </div>
    );
};

export default AllProducts;