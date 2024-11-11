import Image from "next/image";
import { SimpleProduct } from "@/gql/graphql";
import Link from "next/link";

interface ProductCardProps {
  product: SimpleProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/vare/${product.slug}`}
      key={product.id}
      className="w-[clamp(350px, 50%, 500px)] relative overflow-hidden"
    >
      <div className="w-[clamp(350px, 50%, 500px)]">
        <div className="relative w-full pt-[120%] overflow-hidden">
          <Image
            src={product.image?.sourceUrl || ""}
            alt={product.image?.altText || ""}
            width={510}
            height={610}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-[22px] mt-[15px] mb-[5px]">
          {product?.name}
        </p>
        <p className="text-center text-[18px] mt-[5px]">{product?.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
