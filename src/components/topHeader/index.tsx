import { MapPinHouse, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

interface TopHeaderProps {
    title: string;
    contact: {
        address: string;
        phone: string;
        cel: string;
    },
    menus: Menu[];
    bgbanner: {
        url: string;
        imgix_url: string;
    },
    headingslogam: string;
    workerbanner: {
        url: string;
        imgix_url: string;
    }

}

interface Menu {
    name: string;
    url: string;
}


export function TopHeader({contact, menus, headingslogam, workerbanner, title}: TopHeaderProps) {
    return (
        <header className="w-full flex flex-col bg-construcaoHeader bg-no-repeat bg-cover bg-left px-5 pt-5 gap-5 group shadow-xl shadow-gray-700">
        {/* INICIO TOP HEANDER */}
        <div className="top-address">
            <div className="flex flex-row items-center gap-3">                
                <MapPinHouse color="white" size={16} />
                <span className="text-white text-xs">{contact.address}</span>
            </div>
            <div className="flex flex-row items-center gap-3">
                <Phone color="white" size={16} />
                <span className="text-white text-xs">{contact.phone}</span>
            </div>
            <div className="flex flex-row items-center gap-3">
                <MessageCircle color="white" size={16} />
                <span className="text-white text-xs">{contact.cel}</span>
            </div>
        </div>
        {/* FIM TOP HEANDER */}
        {/* INICIO MENU */}
        <nav className="w-full flex flex-row items-center justify-between h-16 px-5 font-medium bg-black bg-opacity-30 rounded-md max-w-7xl mx-auto">
            <div className="text-white font-extrabold text-2xl">{title}</div>
            <div className="hidden md:flex md:flex-row md:gap-6 z-50">
                {menus.map( menu => (
                    <a key={menu.name} href={menu.url} className="text-white">{menu.name}</a>
                ))}
                
            </div>
        </nav>
        {/* FIM MENU */}
        {/* INICIO BANNER         */}
        <div className="w-full flex flex-row items-center justify-center">
            <span className="w-full text-white text-center md:text-4xl xl:text-7xl md:max-w-xl font-bold pb-10">{headingslogam}</span>
            <Image 
                src={workerbanner.url} 
                alt="trabalhador" 
                width={500} 
                height={500} 
                priority={true}
                quality={100}
                className="hidden md:flex w-1/3 md:group-hover:scale-125 duration-500"
            />
        </div>
        {/* FIM BANNER */}
    </header>
    )
}