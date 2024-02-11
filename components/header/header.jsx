import Link from "next/link";
import "./header.css";

const links = [
    { text: "Home", href: "/#Home" },
    { text: "About", href: "/#About" },
    { text: "Contact", href: "/contact" },
    { text: "Posts", href: "/posts" },
];

export default function Header() {
    return (
        <header>
            <h1 className="logo">Header</h1>
            <nav>
                {links.map((link, index) => {
                    return (
                        <Link key={index} href={link.href}>
                            {link.text}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
