interface Props{
    params:{
        product:string
        id:number,
        product_name:string,
        product_desc:string,
        product_price:number
    }
    
}
import React from 'react'
import client from '@/supabase/client'

export default async function page({params}:Props) {
    const supabase=client();
    const {data:products,error}=await supabase.from('products').select().match({id:params.product}).single()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full my-16   lg:py-8">
        <section className="w-full h-fit p-4 lg:px-16 items-center  flex flex-col gap-4">
           {products.product_name}
        </section>
    </main>
  )
}
