interface carouselProps{
    id:number,
    product_name:string,
    product_desc:string,
    product_img:string
}

import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Image from "next/image";

const CarouselDemo:React.FC<carouselProps> = ({id,product_name,product_desc,product_img}) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center relative p-6">
                <Image
                  src={product_img}
                  alt={product_name}
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </CardContent>
            </Card>
            <div className="mt-8 bg-slate-300 py-6 px-2 h-40 truncate">
              <CardTitle>
                <h3 className="text-left mb-2 font-bold leading-8">{product_name}</h3>
              </CardTitle>
              <CardDescription>
                <p className="text-gray-700 overflow-hidden text-left text-base whitespace-normal">{product_desc}</p>
              </CardDescription>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselDemo
