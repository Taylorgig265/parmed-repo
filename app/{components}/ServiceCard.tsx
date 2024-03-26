interface serviceProps {
  id: number;
  service_name: string;
  service_desc: string;
  service_img: string;
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ServiceCard: React.FC<serviceProps> = ({
  id,
  service_name,
  service_desc,
  service_img,
}) => {
  return (
    <div className="h-fit  rounded-xl bg-white">
      <Card className="h-96 rounded-xl w-96 relative">
        <CardContent className=" ">
          <Image
          src={service_img}
          alt={service_name}
          fill={true}
          style={{objectFit:'cover'}}/>
        </CardContent>
        <CardHeader className="h-full mb-4 justify-end gap-2 flex flex-col absolute bg-white/60 backdrop-blur-sm top-0 left-0 overflow-hidden text-ellipsis whitespace-normal">
          <div>
            <CardTitle className="my-4"><h3>{service_name}</h3></CardTitle>
          <CardDescription className=""><p className="">{service_desc}</p></CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ServiceCard;
