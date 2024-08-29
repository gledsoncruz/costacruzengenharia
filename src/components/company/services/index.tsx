"use client";

import { HomeProps } from "@/utils/home.type";
import { ChevronDown, LoaderIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Service({ object: { metadata: { service } } }: HomeProps) {
  const sortServices = service.services.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="servicos" className="w-full flex flex-col items-center px-3 py-10 mt-16 bg-blue-950 shadow-xl shadow-gray-700">
      <h1 className="font-medium text-3xl py-10 text-white">Serviços</h1>
      <div className="w-11/12 md:w-3/5 md:max-w-7xl md:mx-auto grid grid-cols-1 gap-5">
        {sortServices.map((service) => (
          <ServiceItem key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceItem({ service }: any) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="py-5 bg-slate-300 px-5 rounded-md">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span className="font-semibold text-xl">{service.name}</span>
          <span className="transition group-open:rotate-180">
            <ChevronDown />
          </span>
        </summary>
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
          {isLoading && (
            <div className="flex flex-col justify-center items-center animate-pulse">
              <LoaderIcon />
            </div>
          )}
          <Image
            src={service.serviceimage.url}
            alt={service.name}
            width={200}
            height={200}
            quality={100}
            className={`w-full py-5 object-cover transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
            onLoad={() => setIsLoading(false)}  // Set loading to false after image load
          />
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            {service.description}
          </p>
        </div>
      </details>
    </div>
  );
}
