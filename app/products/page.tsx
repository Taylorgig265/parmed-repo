import React from 'react'
import ShopHero from '../{components}/ShopHero'
import client from "@/supabase/client";

export default async function page() {
    const supabase = client();
    const { data: hero, error: heroError } = await supabase.from("products").select();
    console.log(hero);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full my-16   lg:py-8">
        <section className="w-full h-full p-4 lg:px-16 items-center  flex flex-col gap-4">
           <ShopHero/>
        </section>
    </main>
  )
}
