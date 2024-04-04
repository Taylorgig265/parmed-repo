import React from 'react'
import ShopHero from '../{components}/ShopHero'
import client from "@/supabase/client";
import ProductCard from '../{components}/ProductCard';
import Link from 'next/link';

export default async function page() {
    const supabase=client()
    const {data,error}=await supabase.from('products').select()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full my-16   lg:py-8">
        <section className="w-full h-full p-4 lg:px-16 items-center  flex flex-col gap-4">
           <ShopHero/>
        </section>

        {/* collection */}

        
 {/*  Heads up! 👋

  This component comes with some `rtl` classNamees. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms */}

<section className='w-full h-full p-4 lg:px-16 items-center'>
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
        <p className="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>

      <div className="mt-8 sm:flex sm:items-center sm:justify-between">
        <div className="block sm:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 rtl:rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex sm:gap-4">
          {/* Your other code */}
        </div>

        <div className="hidden sm:block">
          <label htmlFor="SortBy" className="sr-only">SortBy</label>
          <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>
      </div>

      <ul className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
       
        {data?.map((item)=>(
           <Link href={`products/${item.id}`} key={item.id} >
              <ProductCard {...item}/>
           </Link>
            
          ))}
      </ul>
    </div>
</section>
        

    </main>
  )
}
