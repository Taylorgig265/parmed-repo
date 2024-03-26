import Image from "next/image"

interface brandsProps{
    id:number,
    brand_name:string,
    brand_img:string
}

const Brands:React.FC<brandsProps> = ({id,brand_name,brand_img}) => {
  return (
    <div className="px-8 bg-white flex justify-center items-center">
          <Image
            src={brand_img}
            alt={brand_name}
            width={100}
            height={100}
          />
        </div>
  )
}

export default Brands
