import { Facebook, Instagram, Linkedin, Twitter, Wheat } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full bg-blue-950 flex flex-col items-center justify-center gap-2 py-10 text-white">
            <div className="flex flex-row items-center justify-center gap-3">
                <Link href="#">
                    <Facebook />
                </Link>
                <Link href="#">
                    <Instagram />
                </Link>
                <Link href="#">
                    <Twitter />
                </Link>
                <Link href="#">
                    <Linkedin />
                </Link>
            </div>
            <h1>CC Serviços de Construção e Engenharia</h1>
            <p>@{new Date().getFullYear()} Desenvolvido por gledson.cruz@gmail.com</p>
        </footer>
    )
}