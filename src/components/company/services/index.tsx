"use client"

import { HomeProps } from "@/utils/home.type"
import { useState } from "react";


export function Service({object: {metadata: {service}}}: HomeProps) {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Função para abrir/fechar o accordion
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Se o index for o mesmo, fecha; se não, abre
    };

    return (      


        // <section id="servicos" className="w-full flex flex-col items-center px-3 py-10 mt-16 bg-blue-950 shadow-xl shadow-gray-700">
        //     <h1 className="font-medium text-3xl py-10 text-white">Serviços</h1>
        //     <div className="w-full md:max-w-7xl md:mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        //         {service.services.map((service, index) => (
        //         <div key={service.name} className="p-4 rounded-xl bg-white hover:shadow-lg duration-300 hover:shadow-gray-800">
        //             {/* Título do Serviço que é clicável */}
        //             <h2
        //             className="mb-4 font-medium text-2xl cursor-pointer"
        //             onClick={() => toggleAccordion(index)}
        //             >
        //             {service.name}
        //             </h2>
        //             {/* Descrição do Serviço com transição suave */}
        //             <div
        //             className={`max-w-2xl overflow-hidden transition-[max-height] duration-500 ease-in-out ${
        //                 openIndex === index ? 'max-h-40' : 'max-h-0'
        //             }`}
        //             >
        //             <p className="pt-2">{service.description}</p>
        //             </div>
        //         </div>
        //         ))}
        //     </div>
        // </section>




        <section id="servicos" className="w-full flex flex-col items-center px-3 py-10 mt-16 bg-blue-950 shadow-xl shadow-gray-700">
            <h1 className="font-medium text-3xl py-10 text-white">Serviços</h1>
            <div className="w-full md:max-w-7xl md:mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

                {service.services.map(service => (
                    <div key={service.name} className="p-4 rounded-xl bg-white hover:shadow-lg duration-300 hover:shadow-gray-800">
                        <h2 className="mb-4 font-medium text-2xl">{service.name}</h2>
                        <p className="max-w-2xl">{service.description}</p>
                    </div>

                ))}
            </div>
        </section> 
    )
}