"use client"

import { HomeProps } from "@/utils/home.type"
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export function Service({ object: { metadata: { service } } }: HomeProps) {
  
  const sortServices = service.services.sort((a, b) => a.name.localeCompare(b.name));

  return (

      <section id="servicos" className="w-full flex flex-col items-center px-3 py-10 mt-16 bg-blue-950 shadow-xl shadow-gray-700">
        <h1 className="font-medium text-3xl py-10 text-white">Serviços</h1>
        <div className="w-11/12 md:w-3/5 md:max-w-7xl md:mx-auto grid grid-cols-1 gap-5">

          {sortServices.map(service => (
            <div key={service.name} className="py-5 bg-slate-300 px-5 rounded-md">              
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="font-semibold text-xl"> {service.name}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                  <Image src={service.serviceimage.url} alt={service.name} width={200} height={200} className="w-full py-5 object-cover" />
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {service.description}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>


    // <section id="servicos" className="w-full flex flex-col items-center px-3 py-10 mt-16 bg-blue-950 shadow-xl shadow-gray-700">
    //     <h1 className="font-medium text-3xl py-10 text-white">Serviços</h1>
    //     <div className="w-full md:max-w-7xl md:mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

    //         {service.services.map(service => (
    //             <div key={service.name} className="p-4 rounded-xl bg-white hover:shadow-lg duration-300 hover:shadow-gray-800">
    //                 <h2 className="mb-4 font-medium text-2xl">{service.name}</h2>
    //                 <p className="max-w-2xl">{service.description}</p>
    //             </div>

    //         ))}
    //     </div>
    // </section> 
  )
}