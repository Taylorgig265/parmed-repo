import React, { useState } from "react"; 
import client from "@/supabase/client";
import ProductDetail from "@/app/{components}/ProductDetail";

interface Props {
  params: {
    product: string;
    id: number;
    product_name: string;
    product_desc: string;
    product_price: number;
  };
}

export default function Page({ params }: Props) {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full my-16 lg:py-8">
      <section className="w-full h-fit p-4 lg:px-16 items-center flex flex-col gap-4">
        <ProductDetail/>
      </section>
    </main>
  );
}
