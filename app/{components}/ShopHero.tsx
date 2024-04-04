
import React from "react";
import Image from "next/image";
import client from "@/supabase/client";
import Boost from "./promotions/Boost";
import Boost_2 from "./promotions/Boost";

export default async function ShopHero(){
  const supabase = client();
    const { data: boost, error: boostError } = await supabase.from("products").select().eq('boost',true);
    const { data: boost_2, error: boost_2Error } = await supabase.from("products").select().eq('boost_2',true);
    const { data: boost_3, error: boost_3Error } = await supabase.from("products").select().eq('boost_3',true);
    const { data: boost_4, error: boostError_4 } = await supabase.from("products").select().eq('boost_4',true);
    console.log(boost_2);
  return (
    <div className="p-4 w-full h-full bg-slate-100">
      <div className="h-[28rem] grid grid-cols-2 lg:grid-cols-4 gap-4  ">
        <div className="col-span-2 h-full relative bg-slate-300">
        {boost?.map((item)=>(
          <div key={item.id}>
              <Boost {...item}/>
              <div className="absolute bg-black/25 w-full h-full p-8 top-0 left-0">
          <div className="flex ">
          <div className="prose  w-fit p-2 rounded-xl lg:prose-xl">
            
          </div>
          </div>
          <div className="prose my-16 lg:prose-xl">
            <h2 className="text-white">{item.product_name}</h2>
          </div>
          <div className="prose lg:prose-xl bg-slate-100 px-4 py-2 w-fit rounded-xl my-16 ml-4">
            <h4 className="text-black ">{`MWK ${item.product_price}`}</h4>
          </div>
          <div className="justify-end flex">
              <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
          </div>
          
        ))}
        
         </div>
        <div className="col-span-1 h-full  flex  gap-2 flex-col">
          <div className="bg-slate-300 relative h-full">
          {boost_3?.map((item)=>(
          <Boost key={item.id}{...item}/>
        ))}
          </div>
          <div className="bg-slate-300 relative h-full">
          {boost_4?.map((item)=>(
          <Boost key={item.id}{...item}/>
        ))}
          </div>
        </div>
        <div className="col-span-1 h-full bg-slate-300">
        <div className="bg-slate-300 relative h-full">
        {boost_2?.map((item)=>(
          <Boost key={item.id}{...item}/>
        ))}
          </div>
        </div>
      
    </div>
    </div>
  );
};


