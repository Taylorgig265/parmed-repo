import Image from "next/image";
interface FeaturedProps {
    id: number;
    product_name: string;
    product_desc: string;
    product_price: string;
    product_img: string;
  }

const ProductCard:React.FC<FeaturedProps> = ({id,product_name,product_desc,product_price,product_img}) => {
  return (
    <div className="group card h-96 shadow-xl">
      <figure className="h-60  relative">
        <Image
          src={product_img}
          alt={product_name}
          fill={true}
          style={{ objectFit: "cover" }}
          className="group-hover:scale-110 transition-all duration-200"
        />
      </figure>
      <div className="card-body h-24 overflow-hidden">
        <h2 className="card-title ">{product_name}</h2>
        <p className="">{product_desc}</p>
      </div>
      <div className="card-actions px-4 h-16 flex justify-between items-center">
        <h3 className="text-md text-gray-600 font-semibold lg:text-md">{`MWK ${product_price}`}</h3>
        <button className="btn btn-primary">Get Quote</button>
      </div>
    </div>
  )
}

export default ProductCard
