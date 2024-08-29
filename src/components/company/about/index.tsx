import Image from "next/image";

interface AboutProps {
    aboutCompany: AboutCompanyProps[]
}

interface AboutCompanyProps {
    title: string;
    content: string;
    imageabout: {
        url: string;
        imgix_url: string;
    }
}

export function About({aboutCompany}: AboutProps) {
    return (
        <section id="empresa" className="w-full flex flex-col items-center md:max-w-7xl md:mx-auto px-3 mt-16">
        <h1 className="font-medium text-3xl mb-10">Empresa</h1>
        <div className="w-full flex flex-row items-center justify-center">
            <Image 
                src="/trabalhadora_construcao_civil_sobre.png"
                alt="Trabalhadora construção civil" 
                width={200} 
                height={48} 
                priority={true}
                quality={100}
                className="hidden md:flex md:w-1/5 md:hover:scale-125 duration-500"
            />
            <div className="flex flex-col items-center justify-center gap-4">

                {aboutCompany.map(about => (
                    <div key={about.title} className="about">
                        <Image 
                            src={about.imageabout.url} 
                            alt={about.title} 
                            width={48} 
                            height={48} 
                            priority={true}
                            quality={100}
                        />
                        <div className="flex flex-col">
                            <h2 className="font-medium text-2xl">{about.title}</h2>
                            <p className="max-w-2xl">{about.content}</p>                    
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    </section>   
    )
}