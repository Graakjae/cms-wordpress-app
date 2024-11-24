import { Product, ProductConnection, SimpleProduct } from "@/gql/graphql";
import ProductCard from "../ui/productCard";
interface SimilarProductsSectionProps {
  products: ProductConnection;
  product: SimpleProduct;
}

const SimilarProductsSection: React.FC<SimilarProductsSectionProps> = ({
  products,
  product,
}) => {
  // Filter out the current product from the list of similar products
  const similarProducts = products?.nodes.filter(
    (similarProduct) => similarProduct.id !== product?.id
  );

  return (
    <div className="relative py-[70px] lg:py-[150px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full flex justify-between">
          <h2 className="text-[24px] md:text-[35px] font-semibold mb-[15px]">
            Lignende produkter
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[31px] relative">
          {similarProducts?.slice(0, 3).map((product: SimpleProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProductsSection;
