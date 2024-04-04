import Image from "next/image";
import Hero from "./{components}/Hero";
import Brands from "./{components}/Brands";
import client from "@/supabase/client";
import ServiceCard from "./{components}/ServiceCard";
import Featured from "./{components}/Featured";
import Faq from "./{components}/Faq";
import Link from "next/link";

export default async function Home() {
  const supabase = client();
  const { data: brands, error: brandError } = await supabase
    .from("brands")
    .select();

  const { data: services, error: brandServices } = await supabase
    .from("services")
    .select();

  const { data: faqs, error: brandFaqs } = await supabase.from("faqs").select();

  const { data: featured, error } = await supabase.from("products").select();
  const products = featured?.slice(0, 8);

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full my-16   lg:py-8">
      {/* hero */}
      <section className="w-full h-fit p-4 lg:px-16 items-center  flex flex-col gap-4">
        <Hero />
      </section>

      {/* brands */}
      <section className="w-full h-fit p-4 lg:px-16 items-center bg-white flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 justify-center items-center max-w-[100rem] bg-white px-4 py-8 gap-4">
          {brands?.map((item) => (
            <Brands key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* service */}
      <section className="w-full h-fit p-8 lg:px-16 items-center bg-slate-100 flex flex-col gap-4">
        <div className=" grid my-8 gap-8 md:gap-16 lg:gap-16 md:grid-cols-3 grid-cols-1">
          {services?.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* featured */}
      <section className="max-w-[100rem] h-fit p-4 lg:px-16 items-center bg-white flex flex-col gap-4">
        <div className="h-fit bg-white px-4 md:px-4 lg:px-8 py4 md:py-8 w-full gap-8 flex flex-col items-center text-black">
          <div className="my-4 text-black prose">
            <h2>Featured Products</h2>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products?.map((product) => (
              <Link href={`/products/${product.id }`} key={product.id}>
              <Featured  {...product} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* faqs */}
      <section className="max-w-[100rem] h-fit p-4 lg:px-16 items-center bg-slate-100 flex flex-col gap-4">
        <div className="h-fit  px-4 md:px-8 lg:px-32 py-8 md:py-16 w-full gap-8 flex flex-col  text-black">
          <div className="my-4 text-black prose">
            <h2 className=" justify-start w-fit">Frequently Asked Questions</h2>
            
          </div>
          <div>
            {faqs?.map((item)=>(
              <Faq key={item.id}{...item}/>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
