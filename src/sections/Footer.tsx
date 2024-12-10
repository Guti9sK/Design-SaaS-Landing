import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <footer className="py-16">
            <div className="p-container">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    <div>
                        <Image src={logoImage} alt="Layers Logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6 transition">
                            {footerLinks.map(({ href, label }) => (
                                <Link
                                    href={href}
                                    key={label}
                                    className="text-white/50 text-sm hover:text-lime-400 duration-500"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
