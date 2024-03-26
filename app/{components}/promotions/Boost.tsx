interface productProps {
    id: number;
    product_name: string;
    product_desc: string;
    product_price: string;
    product_img: string;
  }

import Image from "next/image";

  const Boost: React.FC<productProps> = ({
    id,
    product_name,
    product_desc,
    product_img,
    product_price,
  }) => {
  return (
    <div>
      <Image
              src={product_img}
              alt={product_name}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
   
  )
}

export default Boost
