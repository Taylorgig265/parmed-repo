import React from "react";

import CarouselDemo from "./Carousel";
import client from "@/supabase/client";


export default async function Hero() {
    const supabase=client()
    const{data,error}=await supabase.from('products').select().eq('boost',true)
    console.log
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content lg:grid-cols-2 grid-cols-1 items-center justify-center grid">
          <div>
            <h1 className="text-5xl font-bold">
              Particle Investment{" "}
              <span className="md:text-2xl lg:text-3xl">
                - Your Partner in Medical Supplies
              </span>
            </h1>
            <p className="py-6 text-base text-left md:text-lg lg:text-xl leading-8">
                Particle Investment is a trusted and reliable supplier of
                surgical, laboratory, and other medical equipment in Malawi. We
                provide top-quality products to meet the needs of healthcare
                professionals and institutions.
              </p>
            <div className="flex gap-4">
                <button className="btn btn-primary">Get Quote</button>
                <button className="btn ">View Products</button>
              </div>
            
          </div>


          <div className="flex mx-auto">
          {data?.map((item)=>(
            <CarouselDemo key={item.id}{...item}/>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};


